import React from "react";
import { createRoot } from "react-dom/client";
import SidePanelLoginPage from '../../components/side-panel/side-panel-login'


const root = document.createElement("div");
document.body.appendChild(root);

const rootElement = createRoot(root);
rootElement.render(<SidePanelLoginPage />);
