import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ContentProvider from './Home/Context/ContentProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </React.StrictMode>
);
