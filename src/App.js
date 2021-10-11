import React ,{ useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import  PropagateLoader from 'react-spinners/PropagateLoader';
import { MoonLoader, PulseLoader, PuffLoader } from 'react-spinners';
import { css, jsx } from '@emotion/react'
import Header from './components/Header';
import HeaderMore from './components/HeaderMore';

import Products from './components/Products';

import About from './components/About';

import Drinks from './components/Drinks';
import Snacks from './components/Snacks';
import Ender from './components/Ender';


function App() {
  
  const[loading,setLoading] = useState(false);
  const color = 'pink';
  useEffect(()=>{
 
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000);
  },[])
  
  return (
    <div className="App">
    
    {
      loading ?
      <div
      css={css`
      padding: 320px;
      background-color: hotpink;
      font-size: 100px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}>
                <PuffLoader color={"lime"}
      loading ={loading}
      speedMultiplier= {0.5}
      size={400}
      css={css}/>
      
        </div>
        

       :
      <>
      
      <Navbar/>
     
     <Header/> <HeaderMore/>
     <Products/>
     <Drinks/>
     <Snacks/>
  
     <Ender/>
      <About/>
    
        </>
    }
    </div>
  ); 
}

export default App;
