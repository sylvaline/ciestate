
import React, { useState } from "react";

import { useSelector } from "react-redux";


import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function ProjectCreate() {
  const project = useSelector((state) => state.project);
  const { project_msg, categories } = project;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
 

  const [projectImages, setprojectImages] = useState([]);

  const [msg, setMsg] = useState("");

  const [inputKey, setInputKey] = useState("");
    
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

    

    resetFileInput();
    setTitle("");
    setContent("");
    setCategory("");
    setMsg(project_msg.msg);
  };

  

  return (
   
      <div className="form_container">
        <div className="form_title">
          <h2>Add Project</h2>
        </div>

        {msg ? (
          <div className="alert">
            <h4>{msg}</h4>
          </div>
        ) : null}

        <div className="form_div">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form_div">
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={( editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>


        <div className="form_div">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select category</option>
            {categoryItem}
          </select>
        </div>

        <div className="form_div">
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
  
  );
}


export default ProjectCreate;