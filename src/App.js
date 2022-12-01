// import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home';
import Individuals from './Component/Pages/Individuals';
import Teams from './Component/Pages/Teams';
import Enterprise from './Component/Pages/Enterprise';
import Product from './Component/Pages/Product';
import Pricing from './Component/Pages/Pricing';
import Resource from './Component/Pages/Resource';
import Login from './Component/Pages/Login';
import GetStarted from './Component/Pages/GetStarted';
function App() {
  return (
    <div className="App">
    <Router>
<Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/individuals" element={<Individuals/>}  />
     <Route path="/teams" element={<Teams/>}  />
    <Route path="/enterprise" element={<Enterprise/>}  />
    <Route path="/product" element={<Product/>}  />
    <Route path="/pricing" element={<Pricing/>}  />
    <Route path="/resource" element={<Resource/>}  />
    <Route path="/login" element={<Login/>}  />
    <Route path="/getstarted" element={<GetStarted/>}/>

    </Routes>
      </Router>
    </div>
  );
}

export default App;






