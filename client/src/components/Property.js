import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Property({ key, project }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div className="" key={key}>
      <div className="property_card">
        <Link
          to={{
            pathname: `/project-details/${project._id}`,
            state: { project: project },
          }}
        >
          <img src={project?.projectImages[0].url} alt="" />
        </Link>
        <div className="card_content">
          <Link
            to={{
              pathname: `property-details/${project?._id}`,
            }}
          >
            {project?.title}
          </Link>
          <p>{project?.content}</p>
        </div>

        <div className="category">
          <p>Category</p>
          <p>{project?.category.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Property;
