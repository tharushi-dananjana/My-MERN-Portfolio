import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ මේක වෙනස් වෙනවා
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ✅ React 18 syntax
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
