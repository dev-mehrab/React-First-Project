import React from "react";
import  ReactDOM  from "react-dom";
import "../index.css"


function Card(props){

    const {cardTitle, cardDesc}= props;
    return(
        <div className="card">
            <h1  className="card-heading"> {cardTitle}  </h1>
            <p className="card-body">{cardDesc}</p>
            <p className="card-footer"> {new Date().toLocaleDateString()}</p>
        </div>
    );
};

export default Card;