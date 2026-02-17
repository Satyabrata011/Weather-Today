import React from "react";
import{ Link } from "react-router-dom"


function Appbar(){
  
    return(
        
        <div className="navbar">
        <Link to="/" className="logo">Weather Today</Link>

        <div className="topRightButtons">
        <Link to="/"><button className="btn3d">HOME</button></Link>
        <Link to="/about"><button className="btn3d">ABOUT</button></Link>
        <Link to="/contact"><button className="btn3d">CONTACT</button></Link>
        </div>
        </div>

       
    )

}
export default Appbar;