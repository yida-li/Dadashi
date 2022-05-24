import React from 'react'
import SnackBox from './SnackBox'
import pimage1 from '../images/melon.png'
import pimage2 from '../images/redbean.jpg'
export default function Snacks() {
    return (
        <div id= 'snacks'><div className="App"><h1> Deserts</h1></div>
          
        <div className='a-container'>
        <SnackBox image={pimage1} title="Icecream"/>
        <SnackBox image={pimage2} title="Red-Beans pancake"/>
        </div>

        </div>
    )
}
