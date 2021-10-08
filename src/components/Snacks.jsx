import React from 'react'
import SnackBox from './SnackBox'
import pimage1 from '../images/snack1.png'
import pimage2 from '../images/snack2.png'

export default function Snacks() {
    return (
        <div id= 'products'>
            <h1>Choose a Appetizer</h1>
        <div className='a-container'>
        <SnackBox image={pimage1} title="tofu fries"/>
        <SnackBox image={pimage2} title="fish stuff"/>

        </div>

        </div>
    )
}
