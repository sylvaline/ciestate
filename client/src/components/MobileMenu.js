import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Login from './Login'
import {useSelector} from 'react-redux'

function MobileMenu({  contact }) {
  const [isMenu, setMenu] = useState(false);
const [is_modal, setModal] = useState(false)
const auth = useSelector((state)=>state.auth)


  const closeMenu = () => setMenu(false);

  return (
    <>
    <div className="mobile_nav_menu">
      <div className="nav_header">
        <div className="logo">
          <Link to="/">
            {/* <img src="\image\spacelogo.png" alt="" /> */}
            CIS
          </Link>
        </div>
        <div
          onClick={() => setMenu(!isMenu)}
          className={isMenu ? "menu-toggle open" : "menu-toggle"}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
          <div className="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div>
        <Slide left>
          <ul className={isMenu ? "ul open" : "ul"}>
            
            <li>
              <Link to="/properties">Find properties</Link>
            </li>
               
               <li>
                 <Link to="/about-us">About us</Link>
               </li>
               
               <li>Our services</li>
      
               <li
              onClick={() => {
                contact();
                setMenu(false);
              }}
            >
              <Link to="/contact">Contact us</Link>
            </li>
            
              <li>
                   { auth?.user?.role === "admin" && <Link to="/dashboard">Dashboard</Link>
                   }
                    </li>
                
            {/* {
                    auth?.user?.role === "admin" && <Link to="/dashboard"><li>Dashboard</li></Link>
                } */}
               
               {
                    auth.is_authenticated ? <li onClick={()=>{setMenu(false); setModal(true)}} className="li_btn">
                        <Link to="/logout">Hi {auth?.user?.username} | Logout</Link>
                    </li> :
                     <li onClick={()=>{setMenu(false); setModal(true)}} className="li_btn" >Join us</li>
                }
            
            <li className="menu_social_icons">
              <p>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
              </p>
            </li>
            <li onClick={closeMenu} className="contact">
              <NavLink to="/contact"></NavLink>
            </li>
          </ul>
        </Slide>
      </div>
    </div>
    {
      is_modal && <Login setModal={setModal} />
    }
    </>
  );
}

export default MobileMenu;
