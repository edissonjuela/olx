import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Alert } from 'bootstrap'

if(!navigator.geolocation){
Alert("Su navegador no tiene opcion de geolocalizacion");
throw new Error("Su navegador no tiene opcion de geolocalizacion")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
