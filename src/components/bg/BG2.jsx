import { useCallback } from 'react'
import Particles  from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import options2 from './options2';


const BG2 = () => {
    const particlesInit = useCallback(async(engine)=>{
       console.log(engine)
       
       await loadFull(engine);
    },[]);
    
    const particlesLoaded =useCallback(async(container) =>{
        await console.log(container)
    },[]);
    
      return (
       <Particles
         id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options2}
    
          />
      )
    
    }
    export default BG2