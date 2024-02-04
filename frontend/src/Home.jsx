import React from 'react'
import Hogwartsacceptanceletter from "./Hogwartsacceptanceletter.jsx";
import { Link } from "react-router-dom";
import Navbar from './Navbar';


function Home() {
  return (
    <div>
      <Navbar />

      <h1>kjsdbcvds</h1>
      <Link to="/letter">Letter</Link>

    </div>
  )
}

export default Home