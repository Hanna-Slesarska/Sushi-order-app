
import React, { useState } from 'react';
import Menu from './Menu';
import background from './sushi.png';

const App = () => {
  const [show, setShow] = useState(false);
  
  const handleShowClick = () => {
    setShow(true);
  }
  
  return(
  <div>
    {show && (<Menu />)}
    <div className='bg-img'>
      {!show && (<img src={background} alt="background" />)}
    </div>

    <div className='btn-start'>
        {!show && (<button className='visible' onClick={handleShowClick}>Click here to order sushi</button>)}
        
    </div>
  </div>
      
      
   
  )
}
export default App;