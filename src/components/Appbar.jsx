import React from "react";
import{ Link } from "react-router-dom"


function Appbar(){
  
    return(
        <>
       <div className="appbar" id="myDiv">
      <h1 >Weather Today</h1>
      <div className="topRightButtons">
        
       <Link to='/'> <button to='/'>HOME</button> </Link> 
       <Link to='/about'> <button>ABOUT</button> </Link>  
       <Link to='/contact'> <button>CONTACT</button> </Link>       
        </div>
    </div> 
        </>
       
    )

}
export default Appbar;