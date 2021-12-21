
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {get_categories, create_project} from '../../store/actions/projectActions'

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Nav from "../Nav";

function ProjectEdit({history}) {

  const projectt = history?.location?.state?.project

  console.log({"projectt":projectt})

  useEffect(()=>{
    dispatch(get_categories())
  },[])
  
  const project = useSelector((state) => state.project);
  const { project_msg, categories } = project;

  const dispatch = useDispatch()

  const [title, setTitle] = useState(projectt?.title);
  const [content, setContent] = useState(project?.content);
  const [category, setCategory] = useState(project.category?.name);

  const [inputKey, setInputKey] = useState("");

  const [projectImages, setprojectImages] = useState([]);

  // let projectImage = inputKey ? projectt?.projectImages[0]?.url : projectImages[0]?.url

  const [msg, setMsg] = useState("");

  
    
  const resetFileInput = () => {
    let randomString = Math.random().toString();
    setInputKey(randomString);
  };

  const handleFileChange = (e) => {

    setprojectImages([...projectImages, e.target.files[0]]);
   
  };

  const categoryOption = (categories) => {
    const category = categories.map((category) => {
      return (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      );
    });
    return category;
  };

  const categoryItem = categoryOption(categories);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("title", title);
    form.append("content", content);
    form.append("category", category);
 
    for (let pic of projectImages) {
      form.append("projectImages", pic);
    }

    
    dispatch(create_project(form))
    setMsg(project_msg.msg);
    resetFileInput();
    setTitle("");
    setContent("");
    setCategory("");
    
  };

  console.log({message:msg})

  

  return (
    <>
    <Nav />
    <div className="edit">
      <div className="form_container">
        <div className="form_title">
          <h2>EditProject</h2>
          <p></p>
        </div>

        {msg ? (
          <div className="alert">
            <h4>{msg}</h4>
          </div>
        ) : null}

        <div className="form_div">
        <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form_div">
        <label htmlFor="">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(_, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>


        <div className="form_div">
          <label htmlFor="">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>{projectt?.category?.name}</option>
            {categoryItem}
          </select>
        </div>

        <div className="form_div">
          <img src={projectt?.projectImages[0]?.url ||projectImages[0]?.url} alt="" />
          <input
            type="file"
            placeholder="Enter Project Images"
            name="projectImages"
            onChange={handleFileChange}
            key={inputKey || ""}
          />
        </div>

        <div className="form_div form_btn">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      </div>
      </>
  );
 
}


export default ProjectEdit;
