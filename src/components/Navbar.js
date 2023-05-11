import React from "react";
import './css/Navbar.css';

//function Greet(){
  //  return<h1>Welcome to project 2</h1>
//}
const Navbar = () =>{
    return(
        <div className="Navbar">
          <a href="/" className="logo">Tru Contender</a>
          <ul>
              <li className="active"><a href="#Documentation">Documentation</a></li>
              <li><button><a href="#Sign up">Sign up</a></button></li>

          </ul>
    

    </div>
    )
}


export default Navbar