import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThirdwebProvider} from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThirdwebProvider 
      activeChain="avalanche-fuji" 
       // You can get a client id from dashboard settings
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
