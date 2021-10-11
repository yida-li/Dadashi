import React from 'react'
import SnackBox from './SnackBox'
import pimage1 from '../images/a1.jpg'
import pimage2 from '../images/a2.jpg'
import pimage3 from '../images/a3.jpg'
import pimage4 from '../images/a4.jpg'
export default function Snacks() {
    return (
        <div id= 'snacks'>
            <h1>Choose a Appetizer</h1>
        <div className='a-container'>
        <SnackBox image={pimage1} title="North Star"/>
        <SnackBox image={pimage2} title="Eastern "/>
        <SnackBox image={pimage3} title="tofu fries"/>
        <SnackBox image={pimage4} title="fish stuff"/>

        </div>

        </div>
    )
}
