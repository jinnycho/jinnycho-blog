import React from 'react';
import { createRoot } from "react-dom/client";

function App() {
    return <p>hi</p>;
}

const root = createRoot(document.querySelector('.category-rectangle'));
root.render(<App />);