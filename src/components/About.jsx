import React from 'react'
import yid  from '../images/about.png'
export default function About() {
    return (
        <div id ='about'>
            <div className ='about-text'>

            <h1> Upcoming events</h1>
            <p> Halloween Dash Party</p>

            <button> Read More </button>
            </div>
            <div className='about-image'>
                <img src={yid} alt=''/>
            </div>
            
        </div>
    )
}
