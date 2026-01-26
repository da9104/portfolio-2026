# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies for native modules (canvas, etc.)
RUN apk add --no-cache python3 make g++ build-base cairo-dev pango-dev jpeg-dev giflib-dev librsvg-dev

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application (client and server)
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Install runtime dependencies for canvas
RUN apk add --no-cache cairo pango jpeg giflib librsvg

# Copy package files
COPY package*.json ./

# Install build dependencies again for npm ci (if no prebuilds found), then remove them? 
# Actually simpler to just install them, run npm ci, then (optionally) rely on prebuilds if available.
# But for stability with canvas on alpine, better to build from source.
RUN apk add --no-cache python3 make g++ build-base cairo-dev pango-dev jpeg-dev giflib-dev librsvg-dev

# Install only production dependencies
RUN npm ci --only=production

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/server ./server

# Copy other necessary files (if any, e.g., public assets if not bundled)
# Vite build puts public assets in dist/client usually. 

# Expose the port (Cloud Run sets PORT env var, defaults to 8080 usually, but we use 5173/process.env.PORT)
ENV PORT=8080
EXPOSE 8080

# Start the application
CMD ["npx", "@dotenvx/dotenvx", "run", "--", "npm", "run", "start:docker"]
