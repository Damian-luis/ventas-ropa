import React from "react";
import "./nav.css";

export default function Nav(){

    return <nav className="menu-container">
    
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
  
   
    <a href="#" className="menu-logo">
      <span>Tus estilos</span>
    </a>
  
    
    <div className="menu">
      <ul>
      </ul>
      <ul>
        <li>
          <a href="#signup">
            Sign-up
          </a>
        </li>
        <li>
          <a href="#login">
            Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
    
}
