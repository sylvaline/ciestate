import React, { useEffect } from "react";
import Layout from "./Layout";

function PropertyDetails() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  })

  return (
    <Layout>
      <div className="property_details">
      <div className="property_details_inner">
        <div className="property_image">
          <img src="\image\digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg" alt="" />
        </div>
        <div className="property_details">
            <h3>Service title goes here, it could be the name of the item</h3>
            
            <div className="service_price">
            <p className="service_category">service category</p>
              <p>Cost: <span>#130,000</span></p>
            </div>
            <div className="service_details">
              <h2>Service description</h2>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ut totam, veniam nam dicta ducimus nobis at dignissimos consequatur voluptates itaque cupiditate velit voluptatum beatae repellendus amet dolor doloremque! Cupiditate?
            </p>
            </div>
            
            <div className="detail_btns">
            <button>
            <a
                href="https://wa.me/2347035108999/?text=Hello, I want to buy SUPERLIFE NEURON CARE"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with us
              </a>
              </button> 
              <span></span>
              {/* <WhatsappShareButton url={"https://www.cisupplements.com/"}>
                  <span className="share_icon">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  <span className="what_span">Share</span>
                </WhatsappShareButton> */}
                <button className="share_btn">Share</button>
            </div>
            <div className="service_specification">
            <h2>Specification</h2>
            
               <p>Size: <span>30lit</span></p>
              <p>Location: <span>High level</span></p>
              <p>Rooms: <span>3bed rooms</span></p>
           
            </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default PropertyDetails;
