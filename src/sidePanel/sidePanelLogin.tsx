import React from "react";
import { createRoot } from "react-dom/client";
import SidePanelPage from "../components/sidePanelPage";


const root = document.createElement("div");
document.body.appendChild(root);

const rootElement = createRoot(root);
rootElement.render(<SidePanelPage />);
