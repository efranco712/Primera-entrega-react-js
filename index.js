import React from 'react';
import ReactDOM from 'react-dom/client';
import '.index.css';
import App from './App';
import reportWebVitals from './reportWebVitales';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <App />
);

reportWebVitals();