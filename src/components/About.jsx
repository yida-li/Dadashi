import React from 'react'
import yid  from '../images/book.jpg'
export default function About() {
    return (
        <div id ='about'>
            <div className ='about-text'>


            <h1> Events</h1>
            <p> Opening Hours: Friday-Saturday </p>


            <button> 7:30 pm - 2:30 am </button>
            </div>
            <div className='about-image'>
                <img src={yid} alt=''/>
            </div>
            
        </div>
    )
}
