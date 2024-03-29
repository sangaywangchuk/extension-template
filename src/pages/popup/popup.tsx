import React from 'react'
import { createRoot } from 'react-dom/client'
import PopupPage from '../../components/popup/popup'

const root = document.createElement('div')
document.body.appendChild(root)

const rootElement = createRoot(root)
rootElement.render(<PopupPage />)
