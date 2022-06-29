import React from "react";
import "./card.css";
import { FaShoppingCart } from "react-icons/fa"
export default function Card(props){
    
    return <div className="card">
        <img src={require(`../assets/${props.nombre}.png`)}/>
        <div className="card-text">
            <h4>{props.descripcion}</h4><br/>
            <p>{props.tipo}</p>
            <strong>Precio ${props.precio}</strong>
        </div>
        <div className="cart-container">
            <button onClick={props.handler} value={props.value}>Añadir al carrito<FaShoppingCart className="cart"/></button>
        </div>
    </div>
}