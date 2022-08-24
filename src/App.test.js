import React from 'react';
import { createRoot } from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const container = document.getElementById('root');
  //const div = document.createElement('div');
  const root = createRoot(container);
  root.render(<App />);
  root.unmountComponentAtNode(root);
});
