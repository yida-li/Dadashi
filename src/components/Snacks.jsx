import React from 'react'
import SnackBox from './SnackBox'
import pimage1 from '../images/s1.jpg'
import pimage2 from '../images/s2.jpg'
import pimage3 from '../images/s3.jpg'
export default function Snacks() {
    return (
        <div id= 'snacks'><div className="App"><h1>Choose a Appetizer</h1></div>
          
        <div className='a-container'>
        <SnackBox image={pimage1} title="Red bean Pancake Icecream"/>
        <SnackBox image={pimage2} title="Porc Kimchi Kale leaf"/>
        <SnackBox image={pimage3} title="Potato Pancakes with bacon"/>
        </div>

        </div>
    )
}
