import React ,{ useState , useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import  PropagateLoader from 'react-spinners/PropagateLoader';
import { MoonLoader, PulseLoader, PuffLoader } from 'react-spinners';
function App() {
  
  const[loading,setLoading] = useState(false);

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
      <div>
                <PuffLoader color={"lime"}
      loading ={loading}
      speedMultiplier= {0.5}
      size={400}/>
      
        </div>
        

       :
      
      <Navbar/>
        
    }
    </div>
  ); 
}

export default App;
