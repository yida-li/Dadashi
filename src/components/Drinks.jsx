import React from 'react'
import DrinkBox from './DrinkBox'
import pimage1 from '../images/drink1.png'
import pimage2 from '../images/drink2.png'

export default function Drinks() {
    return (
        <div id= 'drinks'>
            <div className="App"><h1>Choose a Drink</h1></div>
            
        <div className='a-container'>
        <DrinkBox image={pimage1} title="CrayCray"/>
        <DrinkBox image={pimage2} title="walmart tomato juice"/>
        <DrinkBox image={pimage2} title="walmart tomato juice"/>
        <DrinkBox image={pimage2} title="walmart tomato juice"/>
        <DrinkBox image={pimage2} title="walmart tomato juice"/>
        <DrinkBox image={pimage2} title="walmart tomato juice"/>
        </div>

        </div>
    )
}
