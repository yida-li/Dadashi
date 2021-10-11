import React,{useState} from 'react';
import { Button, Link } from 'react-scroll';

import styled from '@emotion/styled'
export default function Navbar() {

    const [nav,setnav] = useState(false);
    const changeBackground = ()=> {

        if( window.scrollY>=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    const Button = styled.button`
    padding: 12px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `
    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>

            <input className='menu-btn' type='checkbox'id='menu-btn'/>
            <label className='menu-icon' for ='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to ="main" smooth={true} duration={2000}> Header  </Link></li>
                <li><Link to ="maindish"smooth={true} duration={2000}> Main Dish </Link></li>
                <li><Link to ="drinks"smooth={true} duration={2000}> Drinks </Link></li>
                <li><Link to ="snacks"smooth={true} duration={2000}> Snacks </Link></li>
                <li><Link to ="about"smooth={true} duration={2000}> Opening </Link></li>
                <li><Link to ="contact"smooth={true} duration={2000}> Contact </Link></li>
               
            </ul>
           

            
        </nav>
    )
}
