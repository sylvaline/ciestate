import React from 'react'
import {Link} from 'react-router-dom'
import NewsLetter from './NewsLetter'

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer_intro">
               <div className="">
               <div className="logo">
            <Link to="/">Chris Iduh Properties</Link>
            </div>
            <p>
            <a
                  href="mailto:ciservices@gmail.com?subject=From CI Services"
                  alt="Email CI services"
                >
                    <i className="fas fa-envelope"></i>
                  ciservices@gmail.com
                </a>
            </p>
            <p>
            <a
                  href="tel:07035108999"
                  alt="CI services"
                >
                    <i className="fas fa-phone"></i>
                  +2347035108999
                </a>
            </p>
            <p>
            <i className="fas fa-map-marker-alt"></i>
            No 2 high level Makudi, Benue State
            </p>
            <p>
            <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
            </p>
               </div>

               <div className="company">
                   <h4>Company</h4>
                 
               <Link to="/properties">
               <p>Find Our Projects</p>
               </Link>
               
                <pnk to="/about-us">
                <p>About us</p>
                </pnk>
                
                <p>Our services</p>
                <Link to="/contact"><p>Contact us</p></Link>
                <Link to="/fav">
                <p className="fav"><i className="far fa-heart"></i></p>
                </Link>
                
           
               </div>

               <div className="news_letter">
               <h4>Newsletter</h4>
                   <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                   <NewsLetter />
               </div>
            </div>
          
         
               
            <div className="buttom_footer">
                <div className="buttom_footer_inner">
                <div className="buttom_footer_left">
                    <p>&copy; 2021 Chris Iduh Properties LTD.</p>
                    </div>
                    <div className="buttom_footer_right">
                        <p>Terms and conditions apply</p>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
