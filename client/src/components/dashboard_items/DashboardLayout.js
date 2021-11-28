import React from 'react'
import Nav from '../Nav'

function DashboardLayout({children}) {
    return (
        <div>
            <Nav />
            {
                children
            }
        </div>
    )
}

export default DashboardLayout
