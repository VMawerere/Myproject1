import React from "react";
import './css/Navbar.css';

//function Greet(){
  //  return<h1>Welcome to project 2</h1>
  //<li><button><a href="#Sign up">Sign up</a></button></li>
//}
const Navbar = () =>{
    return(
        <div className="Navbar">
          <a href="/" className="logo">Tru Contender</a>
          <ul>
              <li><a href="#Projects">projects</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Contact">Contact</a></li>

          </ul>
    

    </div>
    )
}


export default Navbar