import React from 'react'
import RamenBox from './RamenBox'
import pimage1 from '../images/theokboki.jpg'
import pimage2 from '../images/theokboki.jpg'
import pimage3 from '../images/theokboki.jpg'
import pimage4 from '../images/theokboki.jpg'
export default function Ramen() {
    return (
        <div id= 'snacks'><div className="App"><h1>Tteokbokki Mix</h1></div>
          
        <div className='a-container'>
        <RamenBox image={pimage1} title="Tteokbokki"/>
        <RamenBox image={pimage2} title="Boiled Egg"/>
        <RamenBox image={pimage3} title="Ramen"/>
        <RamenBox image={pimage4} title="Cheese"/>
        <RamenBox image={pimage2} title="Sausage"/>
        <RamenBox image={pimage2} title="Kimmari"/>
        
        </div>

        </div>
    )
}
