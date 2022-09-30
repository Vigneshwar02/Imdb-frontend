import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Home from "./Home"
import Listing from "./Listing"
import Add from "./Add"


const Nav=()=>{
  return(
    <div>
      <nav class="flex flex-row flex-auto justify-between py-8 bg-primary text-secondary align-middle text-sm lg:text-lg">
        <a class="pl-5 sm:pl-2">IMDB CLONE</a>
        <ul class="flex  flex-row">
          <li class="lg:pr-10 pr-2"><Link to="/">Home</Link></li>
          <li class="lg:pr-10 pr-2"><Link to="/Listing">Listing</Link></li>
          <li class="lg:pr-10 pr-2"><Link to="/Add">Add movie</Link></li>
        </ul>
      </nav>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path='/Listing' element={<Listing/>}/>
          <Route path='/Add' element={<Add/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
