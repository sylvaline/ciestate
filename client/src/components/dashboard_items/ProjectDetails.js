import React, { useEffect } from "react";
import DashboardLayout from "./DashboardLayout";

function ProjectDetails({ history }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const project = history.location.state.project;

  return (
    <DashboardLayout>
      <>
      
      <div className="project_details">
        <div className="">
          <div className="property_">
            <div className="property-content">
            <h2>{project?.title}</h2>
            
            <div className="category">
              
              <p>{project?.category?.name}</p>
            </div>
            </div>

            <img src={project?.projectImages[0].url} alt="" />

            <div className="card_content">
              <p>{project?.content}</p>
            </div>

            
          </div>
        </div>
      </div>
    </>
    </DashboardLayout>
  );
}

export default ProjectDetails;
