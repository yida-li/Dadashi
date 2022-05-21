import React from 'react'
import DrinkBox from './DrinkBox'

import pimage1 from '../images/back.jpg'
import pimage2 from '../images/back.jpg'


export default function Drinks() {
    return (
        <div id= 'drinks'>
            <div className="App"><h1>Choose a Drink</h1></div>
            
        <div className='a-container'>

        <DrinkBox image={pimage1} title="Sapporo"/>
        <DrinkBox image={pimage2} title="Sapporo"/>
        <DrinkBox image={pimage2} title="Sapporo"/>
        <DrinkBox image={pimage2} title="Sapporo"/>
        <DrinkBox image={pimage2} title="Sapporo"/>
        <DrinkBox image={pimage2} title="Sapporo"/>
        </div>
        <div className='a-container'>
        <DrinkBox image={pimage1} title="Soju"/>
        <DrinkBox image={pimage2} title="Soju"/>
        <DrinkBox image={pimage2} title="Soju"/>
        <DrinkBox image={pimage2} title="Soju"/>
        <DrinkBox image={pimage2} title="Soju"/>
        <DrinkBox image={pimage2} title="Soju"/>
        </div>
        <div className='a-container'>
        <DrinkBox image={pimage1} title="Cogniac"/>
        <DrinkBox image={pimage2} title="Cogniac"/>
        <DrinkBox image={pimage2} title="Cogniac"/>
        <DrinkBox image={pimage2} title="Cogniac"/>
        <DrinkBox image={pimage2} title="Cogniac"/>
        <DrinkBox image={pimage2} title="Cogniac"/>

        </div>
        </div>
    )
}
