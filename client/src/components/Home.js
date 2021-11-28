import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./elements/Button";
import Property from "./Property";
import house from '../assets/images/h1.jpg'
import Layout from "./Layout";
import Slide from 'react-reveal/Slide';
import {} from '../store/actions/projectActions'
import {useSelector} from 'react-redux'

function Home() {
  const {projects} = useSelector((state)=>state.project)
  console.log(projects)
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  },[])
  
  const service = useRef(null) 

  const get_to_service = ()=>{
    window.scrollTo({top:service.current.offsetTop})
  }
    

  
  return (
    <>
    {/* <Nav /> */}
    
    <Layout service={get_to_service}>
      <div name="sylva" className="home">
        
        <div className="home_landing" style={{backgroundImage:`url("${house}")`, backgroundPosition:"center", backgroundSize:"contain"}}>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        
        </Swiper> */}

        </div>
        <div className="cta_contact first">
          <h2> 24/7 Availability, <Link to="/contact"><span>Make An Appointment</span></Link></h2>
        </div>
      

        <div className="our_services">
          <div className="intro_section">
            <h2>Welcome To <span> C.O IDU & PARTNERS</span></h2>
            <h3 className="service_title">Estate Surveyors & Valuers</h3>
            {/* <h3>Experts Specializing In Real Estate Construction and management, Road Construction, Borehole Drilling and Sales of building Materials based in Benue State Nigeria.</h3> */}
            <h3>
              Property Valuation, Estate Development, Compulsory Acquisition and Compensation, Estate Agency & Marketing, Feasibilty & Viability Studies, Land Registration/Title Advisors etc
            </h3>
          </div>
          <div className="" ref={service}>
        <h3 className="title" >Our services</h3>
            <div className="our_services_inner">
            <div className="service_card">
            <i class="far fa-building"></i>
                <div className="card_content">
                <h4>Sales of Building Materials</h4>
                  <p>Our mission is to develop, enhance and add value to the development on behalf of our clients.</p>
                </div>
             
            </div>

            <div className="service_card">
            <i class="fas fa-road"></i>
                <div className="card_content">
                  <h4>Road constructions</h4>
                  <p>By offering a tailored plan to every client, you will receive a full service from our experienced advisors.</p>
                </div>
              
            </div>

            <div className="service_card">
             
              <i className="fas fa-fill-drip"></i>
                <div className="card_content">
                  <h4>Borehole Drilling</h4>
                  <p>By offering a tailored plan to every client, you will receive a full service from our experienced advisors.</p>
                </div>
             
            </div>

            <div className="service_card">
              
              <i className="fas fa-sign"></i>
                <div className="card_content">
                  <h4>Estate Construction and management</h4>
                  <p>By offering a tailored plan to every client, you will receive a full service from our experienced advisors.</p>
                </div>
             
            </div>
            </div>
        </div>
        </div>

        <div className="top_properties">
            <h2 className="title">Top Projects</h2>
          <div className="top_properties_inner">
            {projects.slice(0, 3).map(project=><Property key={project._id} project={project}/>)}
            
          </div>
          <div className="load_more">
            <div className="load_more_inner">
              <Link to="/properties">
              <Button text="View more properties"/>
              </Link>
            </div>
          </div>
        </div>

        <div className="about_us_home">
        <h3 className="title">About us</h3>
        <div className="about_us_home_inner">
        <div className="about_img">
        <img src="\image\man.jpg" alt="" />
        </div>
        <div className="about_content">
            <h4>Chris Iduh</h4>
            <h6>CEO of Chris Iduh properties</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iusto placeat harum enim repudiandae veniam voluptas voluptates accusamus libero voluptate obcaecati dolores facere omnis, labore esse ea nulla, maiores ratione?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iusto placeat harum enim repudiandae veniam voluptas voluptates accusamus libero voluptate obcaecati dolores facere omnis, labore esse ea nulla, maiores ratione?</p>
            <div className="about_btn">
            <Link to="/about-us">
              <Button text="Learn more"/>
              </Link>
            </div>
        </div>
        </div>
        </div>

        <div className="why_choose_us">
        <h3 className="title">Why Choose Us</h3>
          <div className="why_choose_us_inner">

          <div className="choose_card">
             
             <div className="choose_centre">
             <i className="fas fa-fill-drip"></i>
             <h4>The Perfect Residency</h4>
             </div>
               <div className="card_content">
                 
                 <p>By offering a tailored plan to every client, you will receive a full service from our experienced advisors.</p>
               </div>
            
           </div>

            <div className="choose_card">
             
              <div className="choose_centre">
              <i className="fas fa-fill-drip"></i>
              <h4>Built-in Storage Cupboards</h4>
              </div>
                <div className="card_content">
                  
                  <p>By offering a tailored plan to every client, you will receive a full service from our experienced advisors.</p>
                </div>
             
            </div>

            <div className="choose_card">
             
              <div className="choose_centre">
              <i className="fas fa-fill-drip"></i>
              <h4>Global Architect Experts</h4>
              </div>
                <div className="card_content">
                  
                  <p>By offering a tailored plan to every client, you will receive a full service from our experienced advisors.</p>
                </div>
             
            </div>
          </div>
        </div>
        <div className="cta_contact">
        <h2> 24/7 Availability, <Link to="/contact"><span>Make An Appointment</span></Link></h2>
        </div>

        <div className="our_procces">
        <h3 className="title">Our process</h3>
            <div className="our_process_inner">

            <div className="process_card">
                <div className="process_card_icon">
                <i className="fas fa-object-group"></i>
                </div>
                <div className="process_card_content">
                    <h4>Marketing</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio maxime temporibus rem qui saepe vel, recusandae facilis suscipit impedit quidem ducimus molestias tenetur est maiores architecto dicta ad ab rerum!</p>
                </div>
            </div>

            <div className="process_card">
                <div className="process_card_icon">
                <i className="fas fa-object-group"></i>
                </div>
                <div className="process_card_content">
                    <h4>Assistance</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio maxime temporibus rem qui saepe vel, recusandae facilis suscipit impedit quidem ducimus molestias tenetur est maiores architecto dicta ad ab rerum!</p>
                </div>
            </div>

            <div className="process_card">
                <div className="process_card_icon">
                <i className="fas fa-object-group"></i>
                </div>
                <div className="process_card_content">
                    <h4>Administration</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio maxime temporibus rem qui saepe vel, recusandae facilis suscipit impedit quidem ducimus molestias tenetur est maiores architecto dicta ad ab rerum!</p>
                </div>
            </div>

            <div className="process_card">
                <div className="process_card_icon">
                <i className="fas fa-object-group"></i>
                </div>
                <div className="process_card_content">
                    <h4>Guidance</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio maxime temporibus rem qui saepe vel, recusandae facilis suscipit impedit quidem ducimus molestias tenetur est maiores architecto dicta ad ab rerum!</p>
                </div>
            </div>
            </div>
        </div>

      </div>
      </Layout>
     
    </>
  );
}

export default Home;
