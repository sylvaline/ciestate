import React from 'react'
import Layout from './Layout'

function Services() {
    return (
       <Layout>
          <div className="our_services_container">
            <div className="our_services" >
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
       </Layout>
    )
}

export default Services
