import React,{useState} from 'react';
import { Link } from 'react-scroll';
import logo from '../images/dadashi.png';
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

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='main' className='logo'>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox'id='menu-btn'/>
            <label className='menu-icon' for ='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to ="#"> Reservation </Link></li>
                <li><Link to ="#"> Ingredients </Link></li>
                <li><Link to ="#"> Cooks </Link></li>
                <li><Link to ="#"> Recipe </Link></li>
                <li><Link to ="#"> Drinks </Link></li>
            </ul>


            
        </nav>
    )
}
