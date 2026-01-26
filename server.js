import dotenv from 'dotenv'
dotenv.config()
import { DOMMatrix } from 'canvas'; // You may need to install the 'canvas' package
global.DOMMatrix = DOMMatrix;
import fs from 'node:fs/promises'
import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

import { getDatabaseContents } from './server/notionHandler.js';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export const app = express()

app.use(express.static(join(__dirname, 'dist/client'), { index: false }))
app.use('/assets', express.static(join(__dirname, 'dist/client/assets'), { index: false }))

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
    ? await fs.readFile('./dist/client/index.html', 'utf-8')
    : ''

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite
if (!isProduction) {
    const { createServer } = await import('vite')
    vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
    })
    app.use(vite.middlewares)
} else {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(base, sirv('./dist/client', { extensions: [], index: false }))
}

// Serve HTML
app.use('*all', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '')

        /** @type {string} */
        let template
        /** @type {import('./src/entry-server.js').render} */
        let render
        if (!isProduction) {
            // Always read fresh template in development
            template = await fs.readFile('./index.html', 'utf-8')
            template = await vite.transformIndexHtml(url, template)
            render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
        } else {
            template = templateHtml
            render = (await import('./dist/server/entry-server.js')).render
        }

        const posts = await getDatabaseContents();

        // console.log('Server-side posts fetched. Count:', posts?.length, 'First post ID:', posts?.[0]?.id);
        // console.log('Server-side posts typeof:', typeof posts, 'Is Array:', Array.isArray(posts));
        // console.log('Server-side posts check:', Array.isArray(posts));

        if (!Array.isArray(posts)) {
            console.log("SSR Error: posts is actually:", typeof posts, posts);
            return;
        }

        const { html, head, initialState } = await render(url, { posts });

        const stateScript = `<script>window.__INITIAL_STATE__=${JSON.stringify(initialState || {})}</script>`;

        const finalHtml = template
            .replace(`<!--app-head-->`, head ?? '')
            .replace(`<!--app-html-->`, html ?? '')
            .replace('</body>', `${stateScript}</body>`);

        // .replace(
        //   '<!--app-state-->',
        //   `<script>window.__INITIAL_STATE__=${JSON.stringify(initialState || {})}</script>`
        // );

        console.log("Does finalHtml contain INITIAL_STATE?", finalHtml.includes('window.__INITIAL_STATE__'));

        res.status(200).set({ 'Content-Type': 'text/html' }).send(finalHtml)
    } catch (e) {
        vite?.ssrFixStacktrace(e)
        console.log(e.stack)
        res.status(500).end(e.stack)
    }
})

const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
    console.log(`Server started at http://${host}:${port}`)
})

export default app