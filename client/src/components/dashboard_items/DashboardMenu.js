import React from 'react'
import DashboardLayout from './DashboardLayout'
import ProjectList from './ProjectList'

function DashboardMenu({setContent}) {
    return (
        <DashboardLayout >
            <div>
            <div className="sidebar">
                        <div className="sidebar_inner">
                             <h3 className="intro" >Intro</h3>
                        <h3 className={"bg"} onClick={()=>{setContent("p_list") }}>PList</h3>
                            <h3 className={"bg"} onClick={()=>{setContent("p_create"); }}>PCreate</h3>
                        </div>
                        </div>
                        <div className="content">
                        <div className="p_list_content_inner">
                        <ProjectList />
                        </div>
                        </div>
        </div>
        </DashboardLayout>
    )
}

export default DashboardMenu
