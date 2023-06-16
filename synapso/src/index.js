import reportWebVitals from './utils/reportWebVitals';
import ReactDOM from 'react-dom/client';
import React, {StrictMode} from 'react';
import Synapso from './Synapso';


const root = ReactDOM.createRoot(document.getElementById('synapso'));

root.render(
  <StrictMode>
    <Synapso />
  </StrictMode>
);

// In order to show the performance of client side project during the development only
reportWebVitals(console.log);