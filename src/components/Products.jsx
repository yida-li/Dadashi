import React from 'react'
import Productionbox from './Productionbox'
import pimage1 from '../images/m1.jpg'
import pimage2 from '../images/m2.jpg'
import pimage3 from '../images/m3.jpg'
import pimage4 from '../images/m4.jpg'
import pimage5 from '../images/m5.jpg'
export default function Products() {
    return (
        <div id= 'maindish'>
            <div className="App"> <h1>Meal</h1></div>
            
        <div className='a-container'>
        <Productionbox image={pimage1} title="Bulgogi"/>
        <Productionbox image={pimage2} title="Bimbab Bulgogi"/>
        <Productionbox image={pimage3} title="Cheese Boduck"/>
        <Productionbox image={pimage4} title="Shrimp Tender"/>
        <Productionbox image={pimage5} title="Chicken Tender"/>
      
        </div>
       
        </div>
    )
}
