import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { Buffer } from 'buffer';

declare global {
  interface Window {
    global: Window;
    Buffer: typeof Buffer;
    process;
  }
}

window.global = window;
window.Buffer = Buffer;
window.process = {
  env: { DEBUG: undefined },
  version: '',
  nextTick: (fn) => setTimeout(fn, 0),
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
