import React from "react";
import "../../helper/data";
import { data } from "../../helper/data";
import "./Card.css";

const Card = () => {
  return (
    <div class="cardcontainer">
      {data.map((item, index) => (
        <div className="cardbox" key={index}>
            <p>{item.title}</p>
          <div className="image" style={{backgroundImage: `url(${item.image})`}}>
             
           <div className="desc">{item.desc}</div>
          </div>
           
        </div>
      ))}
    </div>
  );
};

export default Card;
