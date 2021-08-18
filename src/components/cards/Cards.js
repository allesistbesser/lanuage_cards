import React from 'react'
import {categories} from "../../helper/data"
import Card from "../card/Card"
import "../cards/Cards.css"

const Cards = () => {
    return (
        <div className="cardsContainer">
            <h1 className="languages">Languages</h1>
            {categories.map((item,index)=>(
                <Card item={item} key={index}/>
                         
            ))}

            
        </div>
    )
}

export default Cards

