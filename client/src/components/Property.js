import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function Property({key, project}) {
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  })
  return (
    <div className="" key={key}>
      <div className="property_card">
        <Link to="/property-details">
          <img src={project?.projectImages[0].url} alt="" />
        </Link>
        <div className="card_content">
          <Link to="/property-details">
            <h4>{project?.title}</h4>
          </Link>
          <p>
           {project?.content}
          </p>
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
