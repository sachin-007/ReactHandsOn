import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ClockApp from './ClockApp.jsx'
import FragmentApp from './FragmentApp.jsx'
import Propss from './components/Propss.jsx'
import StateThings from './components/StateThings.jsx'
import RandQuotGen from './components/RandQuotGen.jsx'
// import Todov1 from './components/Todov1.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoV2 from './components/Todov2.jsx'
import LinkRouting from './components/LinkRouting.jsx'
import WelcomeReact from './components/WelcomeReact.jsx'
import HttpRequestThing from './components/HttpRequestThing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    {/* <WelcomeReact/> */}
    {/* <App /> */}
    {/* <ClockApp/> */}
    {/* <FragmentApp/> */}
    {/* <StateThings></StateThings> */}
    {/* <RandQuotGen/> */}
    {/* <Todov1/> */}
    {/* <TodoV2/> */}
    {/* <LinkRouting/> */}
    <HttpRequestThing/>

  </React.StrictMode>,
)
