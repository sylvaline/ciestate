import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_project, get_projects } from "../../store/actions/projectActions";
import parser from "html-react-parser";
import { Link } from "react-router-dom";
import ModalCancel from "./ModalCancel";


const ProjectList = (props)=> {
  const project = useSelector((state) => state.project);
  const { projects } = project;
  const { project_loading } = useSelector((state) => state.project);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(5);
  const [modulOpen, setModulOpen] = useState(false);
  const [GettingId, setGettingId] = useState(null);

  const loadData = () => {
    setVisible(visible + 5);
  };

  useEffect(()=>{
    dispatch(get_projects())
  }, [])



  const handleCancel = () => {
    // props.history.push("/project-list");
    setModulOpen(false);
  };

  const handleDelete = () => {
    dispatch(delete_project(GettingId));
    setModulOpen(false);
  };

  return (
   
      <div className="projectList">
        {project_loading ? (
          <h3>project loading</h3>
        ) : (
          <>
            <div className="projectList_header">
              <table>
                <tr>
                  <th className="th_large">Title</th>
                  <th className="th_large">Content</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th></th>
                  <th></th>
                </tr>
              </table>
            </div>
            <div>
              <table className="projectList_grid">
                {projects.slice(0, visible).map((project) => {
                  return (
                    <>
                      <tr key={project._id}>
                        <td className="th_large">
                          <Link
                            to={{
                              pathname: `admin-project-details/${project?.category && project?.category?.name}/${project.slug}`,
                              state: { project: project },
                            }}
                          >
                            {project.title ? project.title.slice(0, 50) : ''}
                          </Link>
                        </td>
                        <td className="th_large">
                          {project.content ? parser(project.content.slice(0, 80)) : ''}
                        </td>
                        <td>
                          <img
                            src={
                              project.projectImages
                                ? project.projectImages[0].url
                                : ""
                            } alt=""
                          />
                        </td>

                        <td>{project.category && project.category.name}</td>
                        
                        <td
                          onClick={() => {
                            setModulOpen(true);
                            setGettingId(project._id);
                          }}
                        >
                          Delete
                        </td>
                        <td>
                          <Link
                            to={{
                              pathname: `/project-edit/${project._id}`,
                              state: { project: project },
                            }}
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>
            {modulOpen && (
              <ModalCancel
                title="You want to delete a project?"
                handleCancel={handleCancel}
                id={GettingId}
                handleDelete={handleDelete}
              />
            )}

            {projects.length > visible && (
              <button className="fetch_btn" onClick={() => loadData()}>
                Fetch more project
              </button>
            )}
          </>
        )}
      </div>
    
  );
}

export default ProjectList;
