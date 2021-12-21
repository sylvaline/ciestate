import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav";
import ProjectCreate from "./ProjectCreate";
import { Redirect, Link } from "react-router-dom";

function DashboardLayout({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const [isContent, setContent] = useState("");
  const [isClicked, setClicked] = useState(false);
  const auth = useSelector((state) => state.auth);

 
  return (
    <div>
      <Nav />
      {auth.is_authenticated && auth.user.role === "admin" ? <>
            <div className="dashboard">
            <div className="sidebar">
      <div className="sidebar_inner">
        <div className="sidebar_inner">
          <h3 className="intro">Intro</h3>
          <h3>
              <Link to="/report">Report</Link>
          </h3>
          <h3>
              <Link to="/project-list">project-list</Link>
          </h3>
          <h3 onClick={() => setContent("p_create")}>PCreate</h3>
        </div>
      </div>
    </div>;
              <div className="content">
                {/* <h2> Welcome to the COI Properties dashboard</h2>
                <h4>Things you can do on the dashboard</h4>
                <p>1. You can see the list of all the company projects</p>
                <p>2. You can be able to delete a particular projects</p>
                <p>3. You can be able to edit a particular projects</p>
                <p>
                  4. You can be able to view the details of a particular project
                </p> */}
                {children}
              </div>
            </div>
          </> : <div className="">
            <h2 className="msg_auth">You are not authorised to be here</h2>
          </div>
        }
    </div>
  );
}

export default DashboardLayout;
