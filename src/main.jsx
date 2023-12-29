import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ClockApp from './ClockApp.jsx'
import FragmentApp from './FragmentApp.jsx'
import Propss from './components/Propss.jsx'
import StateThings from './components/StateThings.jsx'
import RandQuotGen from './components/RandQuotGen.jsx'
import Todov1 from './components/Todov1.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClockApp/> */}
    {/* <FragmentApp/> */}

    {/* <StateThings></StateThings> */}
    {/* <RandQuotGen/> */}

    <Todov1/>

  </React.StrictMode>,
)
