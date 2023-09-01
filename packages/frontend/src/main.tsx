import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './tailwind/index.css'

import App from './App'
import { Providers } from './Providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
