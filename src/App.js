import React ,{ useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { PuffLoader} from 'react-spinners';
import { css} from '@emotion/react'
import Header from './components/Header';
import HeaderMore from './components/HeaderMore';

import Products from './components/Products';

import About from './components/About';

import Drinks from './components/Drinks';
import Snacks from './components/Snacks';
import Ender from './components/Ender';
import Address from './components/Address';


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
    <div>
    
    {
      loading ?
      <div
      css={css`
      padding: 320px;
      background-color: hotpink;
      font-size: 100px;
      border-radius: 4px;
      &:hover {
        color: ${color};}`}>
          <PuffLoader color={"crimson"}
      loading ={loading}
      speedMultiplier= {0.2}
      size={200}
      css={css}/>
                <PuffLoader color={"black"}
      loading ={loading}
      speedMultiplier= {0.5}
      size={400}
      css={css}/>
       <PuffLoader color={"crimson"}
      loading ={loading}
      speedMultiplier= {1.0}
      size={700}
      css={css}/>
       <PuffLoader color={"black"}
      loading ={loading}
      speedMultiplier= {1.5}
      size={901}
      css={css}/>
       <PuffLoader color={"crimson"}
      loading ={loading}
      speedMultiplier= {2.0}
      size={10}
      />
             <PuffLoader color={"black"}
      loading ={loading}
      speedMultiplier= {1.5}
      size={40}
      />
           <PuffLoader color={"crimson"}
      loading ={loading}
      speedMultiplier= {1.0}
      size={80}
      />

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
    <Address/>
        </>
    }
    </div>
  ); 
}

export default App;
