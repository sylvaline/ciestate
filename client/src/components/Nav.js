import React, { useRef, useState } from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
import MobileMenu from './MobileMenu'
import {useSelector} from 'react-redux'

function Nav() {
    const [is_modal, setModal] = useState(false)
    const service = useRef(null)
    const auth = useSelector((state)=>state.auth)
    
    return (
        <>
        <div className="nav">
            <div className="nav_inner">
                <div className="logo">
                   <Link to="/">
                   <h2>ChrisIduProperties</h2>
                   </Link>
                </div>
            <ul>
               <Link to="/properties">
               <li>Find Our Projects</li>
               </Link>
               
                <Link to="/about-us">
                <li>About us</li>
                </Link>
                
                <li ref={service}>Our services</li>
                <Link to="/contact"><li>Contact us</li></Link>

                {
                    auth?.user?.role === "admin" && <Link to="/dashboard"><li>Dashboard</li></Link>
                }
                
                {
                    auth?.is_authenticated ? <li className="li_btn">
                        <Link to="/logout">Hi {auth?.user?.username} | Logout</Link>
                    </li> :
                     <li className="li_btn" onClick={()=>setModal(!is_modal)}>Join us</li>
                }
            </ul>
            </div>
        </div>
        <div className="nav_mobile">
        <MobileMenu />
      </div>
        {
            is_modal && <Login setModal={setModal} is_modal={is_modal} />
        }
        
        </>
    )
}

export default Nav
