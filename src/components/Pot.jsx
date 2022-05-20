import React from 'react'
import PotBox from './PotBox'
import pimage1 from '../images/wings.jpg'
import pimage2 from '../images/wings.jpg'
import pimage3 from '../images/wings.jpg'
import pimage4 from '../images/wings.jpg'
export default function Pot() {
    return (
        <div id= 'snacks'><div className="App"><h1>Appetizers</h1></div>
          
        <div className='a-container'>
        <PotBox image={pimage1} title="Gyeran-mari"/>
        <PotBox image={pimage2} title="Corn Cheese"/>
        <PotBox image={pimage3} title="Fried Rice Cakes"/>
        <PotBox image={pimage4} title="Sotteok"/>
        <PotBox image={pimage2} title="Potato pancakes"/>

        </div>

        <div className='a-container'>
        <PotBox image={pimage3} title="3 Piece Chicken Tenders & craffles"/>
        <PotBox image={pimage3} title="6 Piece Chicken wings & fries"/>
        <PotBox image={pimage3} title="Vegetable Yachae Pancake"/>
        <PotBox image={pimage3} title="Seafood Haemul Pancake"/>
        <PotBox image={pimage3} title="Kimichi Pancake"/>
        </div>




        </div>
    )
}
