import React from "react";
import { GoogleMap } from "react-google-maps";
export const Mapa = ()=>{
    return(
<>
        <h1> Esta ubicado en gualaceo</h1>    
  
<GoogleMap
style={{height: '500px', width: '500px' }}
zoom={10}
center={{ lat: 9.423765, lgn: -3.664428,}}
/>
 
</>       
    );
}