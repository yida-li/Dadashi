import React from 'react'
import DrinkBox from './DrinkBox'
import pimage1 from '../images/toyko.png'


export default function Drinks() {
    return (
        <div id= 'drinks'>
            <div className="App"><h1>Choose a Drink</h1></div>
            
        <div className='a-container'>
        <DrinkBox image={pimage1} title="Tokyo Cocktail"/>
        <DrinkBox image={pimage1} title="Tokyo Cocktail"/>
        <DrinkBox image={pimage1} title="Tokyo Cocktail"/>
        <DrinkBox image={pimage1} title="Tokyo Cocktail"/>
        <DrinkBox image={pimage1} title="Tokyo Cocktail"/>
        <DrinkBox image={pimage1} title="Tokyo Cocktail"/>
        </div>

        </div>
    )
}
