import React, { useEffect, useState } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

const NavBar = (props) => {
  
  
  
  // const profileClickHandler = () => {
  //   isProfileClickedOn ? setIsProfileClickedOn(false) : setIsProfileClickedOn(true);
  // }

  const clickhandler = () => {
    
       props.isProfileClickedOn ? props.setIsProfileClickedOn(false) : props.setIsProfileClickedOn(true)
    
  }

  

  
  
  return ( 
        <>
        <nav>
          <Link to={"/"}>
            <h1 className="icon">dev<span className="icon-span">Corner</span></h1>
          </Link>
          
            

          <div className='nav'>
            <ul>
              <Link to={"/"}>
                <span className='nav-items'>Home</span>
              </Link>
              <Link to={"/blogs"}>
                <span className='nav-items'>Blogs</span>
              </Link>
              <Link to={"/"}>
                <span className='nav-items'>Portfolio</span>
              </Link>
              <Link to={"/"}>
                <span className='nav-items'>About</span>
              </Link>
              
            </ul>
            <div className="account-icon-div" onClick={clickhandler}>
              <AccountCircle fontSize="large" className="account-icon" />
            </div>
            
          </div>

          
        </nav> 
        </>
     );
}
 
export default NavBar;