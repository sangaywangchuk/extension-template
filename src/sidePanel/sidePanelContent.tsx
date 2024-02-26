import React from 'react'
import { createRoot } from 'react-dom/client'

const root = document.createElement('div')
document.body.appendChild(root)

const rootElement = createRoot(root)
rootElement.render(<div> side panel content </div>)
