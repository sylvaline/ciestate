import React from 'react'
import Nav from './Nav'
import Footer from '../components/Footer'

function Layout({children, service}) {
    return (
        <div className="layout">
            <Nav service={service} />
           {children}
           <Footer />
        </div>
    )
}

export default Layout
