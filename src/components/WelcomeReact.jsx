import {BrowserRouter,Route,Link, Routes} from 'react-router-dom'
import App from '../App'
import ClockApp from '../ClockApp'
import FragmentApp from '../FragmentApp'
import StateThings from './StateThings'
import RandQuotGen from './RandQuotGen'
import Todov1 from './Todov1'
import TodoV2 from './Todov2'

import CodeDisplay from "./LinkRouting";
import UseParamThing from './UseParamThing'

function WelcomeReact() {
    return(
        
        <div>
            <h1>welcome to the react hands on</h1>
            <p>now there are below links click on the following links and get to know about all the hand's on project that i have done</p>
            <BrowserRouter>
          <div>
            <nav>
              <ul>    
                <li> <Link to="/user/ClockApp">ClockApp</Link></li>
                <li> <Link to="/user/FragmentApp">FragmentApp</Link></li>
                <li> <Link to="/user/StateThings">StateThings</Link></li>
                <li> <Link to="/user/RandQuotGen">RandQuotGen</Link></li>
                <li> <Link to="/user/Todov1">Todov1</Link></li>
                <li> <Link to="/user/TodoV2">TodoV2</Link></li>
                {/* <li> <Link to="/Routing">Link Routing</Link></li> */}
              </ul>
            </nav>
            <Routes>
          {/* <Route path="/user/:username" element={<UseParamThing />} /> */}
          <Route path="/user/ClockApp" element={<ClockApp />} />
          <Route path="/user/FragmentApp" element={<FragmentApp />} />
          <Route path="/user/StateThings" element={<StateThings />} />
          <Route path="/user/RandQuotGen" element={<RandQuotGen />} />
          <Route path="/user/Todov1" element={<Todov1 />} />
          <Route path="/user/TodoV2" element={<TodoV2 />} />
        </Routes>
        
          </div>

            
        </BrowserRouter>

        </div>
    )
}

export default WelcomeReact;