import React from 'react'
import StewBox from './StewBox'
import pimage1 from '../images/wings.jpg'
import pimage2 from '../images/wings.jpg'
import pimage3 from '../images/wings.jpg'
import pimage4 from '../images/wings.jpg'
export default function Stew() {
    return (
        <div id= 'snacks'><div className="App"><h1>Korean Stews</h1></div>
          
        <div className='a-container'>
        <StewBox image={pimage1} title="Sundubu Jjigae"/>
        <StewBox image={pimage2} title="Kimchi Jjigae"/>
        <StewBox image={pimage3} title="Gamja Tang"/>
        <StewBox image={pimage4} title="Yukgaejang"/>
        <StewBox image={pimage2} title="Haemul Tang"/>
        
        </div>

        </div>
    )
}
