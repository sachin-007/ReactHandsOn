import {BrowserRouter,Route,Link, Routes} from 'react-router-dom'
import App from '../App'
import ClockApp from '../ClockApp'
import FragmentApp from '../FragmentApp'
import StateThings from './StateThings'
import RandQuotGen from './RandQuotGen'
import Todov1 from './Todov1'
import TodoV2 from './Todov2'


function LinkRouting() {
    const routingCode = `

    <BrowserRouter>
    <div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ClockApp">ClockApp</Link>
          </li>
          <li>
            <Link to="/FragmentApp">FragmentApp</Link>
          </li>
          <li>
            <Link to="/StateThings">StateThings</Link>
          </li>
          <li>
            <Link to="/RandQuotGen">RandQuotGen</Link>
          </li>
          <li>
            <Link to="/Todov1">Todov1</Link>
          </li>
          <li>
            <Link to="/TodoV2">TodoV2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ClockApp" element={<ClockApp />} />
        <Route path="/FragmentApp" element={<FragmentApp />} />
        <Route path="/StateThings" element={<StateThings />} />
        <Route path="/RandQuotGen" element={<RandQuotGen />} />
        <Route path="/Todov1" element={<Todov1 />} />
        <Route path="/TodoV2" element={<TodoV2 />} />
      </Routes>
 
    </div>
  </BrowserRouter>
    `.toString();
    
    return (
        <div>
        <h2>Your Code:</h2>
        <pre dangerouslySetInnerHTML={{ __html: routingCode }} />
      </div>
    )
}

export default LinkRouting