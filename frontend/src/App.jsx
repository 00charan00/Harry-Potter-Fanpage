import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import Sorting from './Sorting.jsx';

import Hogwartsacceptanceletter from "./Hogwartsacceptanceletter.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/sorting' element={<Sorting />}></Route>
        <Route path='/letter' element={<Hogwartsacceptanceletter />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
