import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const state = window.__INITIAL_STATE__ || {};
const initialPosts = state.posts || []; 

console.log(initialPosts, "client array check");

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App initialPosts={initialPosts} />
  </StrictMode>,
)