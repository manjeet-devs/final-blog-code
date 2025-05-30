// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import FrontApp from "./front/App";
// // import AdminApp from "./admin/App";
// import './index.css'; 

// const pathname = window.location.pathname;

// if (pathname.startsWith('/admin')) {
//   import('./admin/startUp').then(({ default: AdminApp }) => {
//     ReactDOM.createRoot(document.getElementById('root')).render(<AdminApp />);
//   });
// } else {
//   import('./front/startUp').then(({ default: FrontApp }) => {
//     ReactDOM.createRoot(document.getElementById('root')).render(<FrontApp />);
//   });
// }





import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
