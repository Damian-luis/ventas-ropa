import React from "react";
import "./card.css";

export default function Card(props){
    
    return <div className="card">
        <img src={require(`../assets/${props.nombre}.png`)}/>
        <div className="card-text">
            <h4>{props.descripcion}</h4><br/>
            <p>{props.tipo}</p>
            <strong>{props.precio}</strong>
        </div>
    </div>
}