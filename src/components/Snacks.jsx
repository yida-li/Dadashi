import React from 'react'
import SnackBox from './SnackBox'
import pimage1 from '../images/melon.png'

export default function Snacks() {
    return (
        <div id= 'snacks'><div className="App"><h1> Deserts</h1></div>
          
        <div className='a-container'>
        <SnackBox image={pimage1} title="Icecream"/>

        </div>

        </div>
    )
}
