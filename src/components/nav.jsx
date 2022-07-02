import React from "react";
import "./nav.css";

export default function Nav(){

    return <nav className="menu-container">
    
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
  
   
    <div className="menu-logo">
      <p>Tus estilos</p>
    </div>
  
    
    <div className="menu">
      <ul>
      </ul>
      <ul>
        <li>
          <a href="#signup">
            Quienes somos
          </a>
        </li>
        <li>
          <a href="#login">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  </nav>
    
}
