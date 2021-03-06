import { useState } from 'react';

import './style.css';

function Input ({ placeholder, type }){
    
    const [size, setSize] = useState(15);
    const [height, setHeight] = useState(0);
    const [marginT, setMarginT] = useState(5);
    const [borderInput, setBorderInput] = useState(false);

    function handleEventInput(){
         setSize(10);
         setHeight(18);
         setMarginT(0);
         setBorderInput(true);
    }

    return(
      <>
         <div className="input" onClick={handleEventInput} style={{ border: borderInput ? '2px solid  rgb(201, 139, 25)': 'none' }}>
             <label style={{ fontSize: size, marginTop: marginT }}>{ placeholder }</label>
             <input style={{ height: height, }} type={type} />
         </div>
      </>
    )
}

export default Input;