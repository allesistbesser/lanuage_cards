import React, { useState } from "react";
import "./Card.css";

const Card = ({ item }) => {
  const [show, setshow] = useState(false);

  const toogle = () => {
    setshow(!show);
  };

  return (
    <div className="container" key={item.name} onClick={toogle}>
      {show ?  <div className="description" >
        {item.options.map((opt,index) => (
         <p key={index}>{opt}</p>
        ))}
      </div>  :   <div className="image" style={{ backgroundImage: `url(${item.img})` }}>
      
        <p>{item.name}</p>
      </div>   }
      

      
    </div>
  );
};

export default Card;
