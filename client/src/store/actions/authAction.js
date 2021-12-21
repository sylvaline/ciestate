import {USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, IS_LOADING, REGISTER_SUCCESS, REGISTER_FAIL} from './types'
import axios from '../../helper/axios'
import configs from '../../helper/config'

import {error_msg, clear_error_msg} from './errorAction'



export const user_loaded = () => (dispatch, getState)=> {
    
    dispatch({type : IS_LOADING})

    const config = configs(getState, "GET", '/user/auth-check')

    axios(config)
    .then(res => dispatch({
        type : USER_LOADED,
        payload : res.data
    }))
    .catch(err => {
        // dispatch(error_msg(err.response.data, err.response.status))
        console.log(err.response)
        dispatch({type: AUTH_ERROR})
    })
    
}

export const register = (data) => dispatch => {
    dispatch({type : IS_LOADING})

    const config = {
        method : "POST",
        url : "/user/register",
        headers : {
            "Content-Type" : "application/json",
        },
        data : JSON.stringify(data)
    }

    axios(config)
    .then(res => 
        {
            if(res.data){
                dispatch({
                    type : REGISTER_SUCCESS,
                    payload : res.data
                })

                dispatch(error_msg(res.response.data, res.response.status))

            } 
            else {
                dispatch(error_msg(res.response.data, res.response.status))
                dispatch({
                    type : REGISTER_FAIL
                })
            }
        }
    )
    .catch(err => console.log(err))
  
}

export const admin = (data) => dispatch => {
    dispatch({type : IS_LOADING})

    const config = {
        method : "POST",
        url : "/user/admin",
        headers : {
            "Content-Type" : "application/json",
        },
        data : JSON.stringify(data)
    }

    axios(config)
    .then(res => 
        {
            if(res.data){
                dispatch({
                    type : REGISTER_SUCCESS,
                    payload : res.data
                })

                dispatch(error_msg(res.data.msg, res.response.status))

            } 
            else {
                dispatch(error_msg(res.response.data, res.response.status))
                dispatch({
                    type : REGISTER_FAIL
                })
            }
        }
    )
    .catch(err => console.log(err))
  
}

export const signin = data => dispatch => {

    dispatch({type : IS_LOADING})

    const config = {
        method : "post",
        url : "/user/login",
        headers : {
            "Content-Type":"application/json",  
        },
        data : JSON.stringify(data)
    }

    axios(config)
    .then(res =>{
        
        if(res.data){
            dispatch({
                type : LOGIN_SUCCESS,
                payload : res.data
            })
            dispatch(error_msg(res.data.msg, res.data.status))
            console.log(res?.data.msg)
        } else{
            dispatch(error_msg(res.response?.data.msg, res.response?.status))
            console.log(res.response?.data.msg)
            dispatch({
                type : LOGIN_FAIL
        })
        }
        
    }
    )
    .catch(err => console.log(err))
}

export const signout = () =>{
    
    return{
        type : LOGOUT_SUCCESS,
    }
}

