import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/next"
import App from './App'

const state = window.__INITIAL_STATE__ || {};
const initialPosts = state.posts || []; 

console.log(initialPosts, "client array check");

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <Analytics />
    <App initialPosts={initialPosts} />
  </StrictMode>,
)