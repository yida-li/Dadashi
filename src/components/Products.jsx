import React from 'react'
import Productionbox from './Productionbox'

import pimage1 from '../images/back.jpg'
import pimage2 from '../images/back.jpg'
import pimage3 from '../images/back.jpg'

export default function Products() {
    return (
        <div id= 'maindish'>
            <div className="App"> <h1>Traditional Korean</h1></div>
            
        <div className='a-container'>

        <Productionbox image={pimage1} title="Beef Japchae"/>
        <Productionbox image={pimage2} title="Vegetable Japchae"/>
        <Productionbox image={pimage2} title="Beef Bibimbap"/>
        <Productionbox image={pimage3} title="Vegetable Bibimbap"/>
        <Productionbox image={pimage3} title="Porc Bibimbap"/>
        </div>



            <div className="App"> <h1>Traditional Korean with Rice</h1></div>
            <div className='a-container'>
        <Productionbox image={pimage1} title="Bulgogi"/>
        <Productionbox image={pimage1} title="La Galbi"/>
        <Productionbox image={pimage1} title="Cheese Buldak"/>
<Productionbox image={pimage1} title="Jaeyuk Bokkeum"/>
        </div>
        <div className='a-container'>

        
        <Productionbox image={pimage1} title="Ojnguh Bokkeum"/>
        <Productionbox image={pimage1} title="Ogyupsal"/>
        <Productionbox image={pimage1} title="Jokbal"/>
        <Productionbox image={pimage1} title="Padak"/>
        </div>
        <div className='a-container'>


        <Productionbox image={pimage1} title="Gogogo Tuigim"/>
        <Productionbox image={pimage1} title="Jjiajangmyun"/>
<Productionbox image={pimage1} title="Jjambong"/>
<Productionbox image={pimage1} title="Kampungi"/>
        </div>
        <div className='a-container'>


<Productionbox image={pimage1} title="TangSooYook"/>
<Productionbox image={pimage1} title="Donkatsu"/>
<Productionbox image={pimage1} title="Chicken Donkatsu"/>
<Productionbox image={pimage1} title="Seoul CheeseSteak"/>

</div>
<div className="App"> <h1>Poutine</h1></div>
<div className='a-container'>

<Productionbox image={pimage1} title="Bulgogi Tteok Poutine"/>
<Productionbox image={pimage1} title="Cheese Booldak Poutine"/>
</div>



        </div>
    )
}
