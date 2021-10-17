import React from 'react'
import yid  from '../images/book.jpg'
export default function About() {
    return (
        <div id ='about'>
            <div className ='about-text'>

            <h1> Upcoming events</h1>
            <p> Official Opening: Friday September 22 2021</p>

            <button> 5:30 pm - 2:30 am </button>
            </div>
            <div className='about-image'>
                <img src={yid} alt=''/>
            </div>
            
        </div>
    )
}
