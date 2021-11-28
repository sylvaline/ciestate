import React, { useState, useEffect} from 'react'
import Nav from '../Nav'
import ProjectCreate from './ProjectCreate'
import ProjectList from './ProjectList'
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'

function Dashboard() {
    useEffect(()=>{
        window.scrollTo({top:0, behavior:"smooth"})
      })
    const[isContent, setContent] = useState("")
    const[isClicked, setClicked] = useState(false)
    const auth = useSelector((state)=>state.auth)

    if(auth.is_authenticated && auth.user.role === "admin"){
        switch(isContent){
            case "p_list":
                
                return (
                    <>
                    <Nav />
                    <div className="dashboard">
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
                    </>
                )
                case "p_create":
                return (
                    <>
                    <Nav />
                    <div className="dashboard">
                        <div className="sidebar">
                        <div className="sidebar_inner">
                        <h3 className="intro" >Intro</h3>
                            <h3 className={isClicked && "bg"} onClick={()=>{setContent("p_list"); setClicked(!isClicked)}}>PList</h3>
                            <h3 className={isClicked && "bg"} onClick={()=>{setContent("p_create"); setClicked(!isClicked)}}>PCreate</h3>
                        </div>
                        </div>
                        <div className="content">
                            <ProjectCreate />
                        </div>
                    </div>
                    </>
                )
    
                default:
                    return (
                        <>
                        <Nav/>
                        <div className="dashboard">
                            <div className="sidebar">
                            <div className="sidebar_inner">
                            <div className="sidebar_inner">
                            <h3 className="intro" >Intro</h3>
                            <h3 onClick={()=>setContent("p_list")}>PList</h3>
                            <h3 onClick={()=>setContent("p_create")}>PCreate</h3>
                        </div>
                            </div>
                            </div>
                            <div className="content">
                            <h2> Welcome to the COI Properties dashboard</h2>
                            <h4>Things you can do on the dashboard</h4>
                            <p>1. You can see the list of all the company projects</p>
                            <p>2. You can be able to delete a particular projects</p>
                            <p>3. You can be able to edit a particular projects</p>
                            <p>4. You can be able to view the details of a particular project</p>
                            </div>
                        </div>
                        </>
                    )
        }
        
    } else{
        return <Redirect to={"/"}/>
    }
    }
    

export default Dashboard
