import React, { useContext, useEffect } from "react";
import { ProfileIconContext } from "./profileIconContext";
import { useRef } from "react";

const LoginModal = ({isProfileClickedOn, setIsProfileClickedOn}) => {
    

    const isClicked = useContext(ProfileIconContext);
    
    const loginModal = useRef(null);
    const loginHeading = useRef(null);
    const loginForm = useRef(null);
    const loginPicture = useRef(null);
    const loginEmail = useRef(null);
    const loginPassword = useRef(null);
    const loginPasswordd = useRef(null);

    

    const clickhandler = (event) => {
        // 
        if(event.target == loginModal.current){
            setIsProfileClickedOn(true);
        } else if (event.target == loginHeading.current){
            setIsProfileClickedOn(true);
        } else if (event.target == loginForm.current){
            setIsProfileClickedOn(true);
        } else if (event.target == loginPicture.current){
            setIsProfileClickedOn(true);
        } else if (event.target == loginEmail.current){
            setIsProfileClickedOn(true);
        } else if (event.target == loginPassword.current){
            setIsProfileClickedOn(true);
        } else if (event.target == loginPasswordd.current){
            setIsProfileClickedOn(true);
        }  
        
        else {
            setIsProfileClickedOn(false);
            
        }
    }
    
    return ( 
        <>  <div style={{visibility: isClicked ? "visible" : "hidden"}} className="modalBackground" onClick={clickhandler}>
                <div className="login-modal" ref={loginModal}>
                    
                    <img className="profile-picture" ref={loginPicture} src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg" alt="" />
                    <h1 className="profile-heading" ref={loginHeading}>Login</h1>

                    <form className="form" ref={loginForm}>
                        <input ref={loginEmail} className="form-item" type="email" placeholder="Enter your email" />
                        <input ref={loginPassword} className="form-item" type="password" placeholder="Enter your password" />
                        <input ref={loginPasswordd} className="form-item" type="password" placeholder="Repeat Password" />
                    </form>
                    
                </div>
            </div>
            
        </>
     );
}
 
export default LoginModal;