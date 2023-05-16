import React from "react";
import './css/Projects.css';

const Projects = () =>{

    return(
        <div className="Projects" id="Projects">
            <h1 className="Heading">My Projects </h1>
        
        <div className="projectscards">
            <div className="card">
            <h1>Webpage designing</h1>
            <p>Do you have an idea of what your web page looks like? Are you out of ideas but need the world to know about eht you do?
                    We create a safe space to share your dream and make what you want a reality to creat for you the webpage of your dreams.
                    To bring your dream to reality...</p>
                    <i className="fa fa-link">Github</i>
             </div>
             <div className="card">
            <h1>Webapp designing</h1>
            <p>Do you have an idea of what your web page looks like? Are you out of ideas but need the world to know about eht you do?
                    We create a safe space to share your dream and make what you want a reality to creat for you the webpage of your dreams.
                    To bring your dream to reality...</p>
                    <i className="fa fa-link"></i>
             </div>
             
        </div>
            
        </div>
    )
}

export default Projects