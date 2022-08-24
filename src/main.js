// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.js';

// ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import "./main.css"

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
const root = createRoot(container);
//createRoot(container).render(<App />, document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);
