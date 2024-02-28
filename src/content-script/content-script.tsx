import React from 'react'
import { createRoot } from 'react-dom/client'
import ContentPage from '../components/content-script-page'
import "./content-script.scss";


const root = document.createElement('div')
document.body.appendChild(root)

const rootElement = createRoot(root)
rootElement.render(<ContentPage />)
