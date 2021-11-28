import { project_msg } from "./projectMsgAction";

import configs from "../../helper/config";

import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  GET_ALL_PROJECT,
  SEARCH_PROJECT,
  GET_ALL_PROJECT_CATEGORIES,
  PROJECT_LOADING,
  EDIT_PROJECT,
  PROJECT_ERROR,
  GET_SINGLE_PROJECT
} from "./types";

import axios from "../../helper/axios";

const get_projects = () => (dispatch, getState) => {
  // dispatch({ type: PROJECT_LOADING });
  const config = configs(getState, "GET", "/project/all/projects");
  axios(config)
    .then((res) =>
      dispatch({
        type: GET_ALL_PROJECT,
        payload: res.data,
      })
    )
    .catch((err) => dispatch({ type: PROJECT_ERROR }));
};

export const create_project = (projects) => (dispatch, getState) => {
  dispatch({ type: PROJECT_LOADING });

  const config = configs(getState, "POST", "/project/create", projects);

  axios(config)
    .then((res) => {
      console.log(res.data)
      dispatch({
        type: CREATE_PROJECT,
        payload: res.data.data,
      });
      dispatch(project_msg(res.data.msg, res.status));
      dispatch(get_projects());
    })
    .catch((err) => {
      console.log(err)
      // dispatch(project_msg(err.response.data, err.response.status));
      dispatch({ type: PROJECT_ERROR });
    });
};

export const search_project = (title) => {
  return {
    type: SEARCH_PROJECT,
    payload: title,
  };
};

export const delete_project = (id) => (dispatch, getState) => {
  dispatch({ type: PROJECT_LOADING });

  const config = configs(getState, "DELETE", `/project/delete/${id}`);

  axios(config)
    .then((res) => {
      dispatch({
        type: DELETE_PROJECT,
        payload: id,
      });
      dispatch(get_projects());
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({ type: PROJECT_ERROR });
    });
};

// Get all PROJECT categories
export const get_categories = () => (dispatch) => {
  dispatch({ type: PROJECT_LOADING });
  axios.get("/category/all").then((res) =>
    dispatch({
      type: GET_ALL_PROJECT_CATEGORIES,
      payload: res.data,
    })
  );
};

export const single_PROJECT = (id) => (dispatch, getState) =>{
  const config = configs(getState, "GET", `/project/${id}`);

  axios(config)
    .then((res) =>
      {
        dispatch({
          type: GET_SINGLE_PROJECT,
          payload: res.data,
        });
        console.log(res.data)
      }
    )
    .catch((err) => {
      console.log(err.response.data);
      dispatch({ type: PROJECT_ERROR });
    });
}

// EDIT PROJECT
export const edit_PROJECT = (id, data) => (dispatch, getState) => {
  const config = configs(getState, "PROJECT", `/project/edit/${id}`, data);

  axios(config)
    .then((res) =>
      dispatch({
        type: EDIT_PROJECT,
        payload: { id, data},
      })
    )
    .catch((err) => {
      console.log(err.response.data);
      dispatch({ type: PROJECT_ERROR });
    });
};


export { get_projects};
