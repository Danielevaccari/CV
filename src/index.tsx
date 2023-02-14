import * as React from 'react';
import { createRoot } from 'react-dom';
import './css/index.style.scss';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);