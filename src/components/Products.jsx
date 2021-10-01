import React from 'react'
import Productionbox from './Productionbox'
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'

export default function Products() {
    return (
        <div id= 'products'>
            <h1>Choose a Burger</h1>
        <div className='a-container'>
        <Productionbox image={pimage1} title="Crabby patty"/>
        <Productionbox image={pimage2} title="Sandy Buns"/>

        </div>

        </div>
    )
}
