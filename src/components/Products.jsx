import React from 'react'
import Productionbox from './Productionbox'
import pimage1 from '../images/s1.jpg'
import pimage2 from '../images/s2.jpg'
import pimage3 from '../images/steal1.PNG'
export default function Products() {
    return (
        <div id= 'maindish'>
            <h1>Choose a Burger</h1>
        <div className='a-container'>
        <Productionbox image={pimage1} title="Crabby patty"/>
        <Productionbox image={pimage2} title="Sandy Buns"/>
        <Productionbox image={pimage2} title="Sandy Buns"/>
        <Productionbox image={pimage3} title="Picks Deluxe"/>
        </div>
        <div className='a-container'>
        <Productionbox image={pimage1} title="Crabby patty"/>
        <Productionbox image={pimage2} title="Sandy Buns"/>
        <Productionbox image={pimage2} title="Sandy Buns"/>
        <Productionbox image={pimage2} title="Sandy Buns"/>
        </div>
        </div>
    )
}
