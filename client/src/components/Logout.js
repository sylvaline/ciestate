import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signout} from '../store/actions/authAction'
import {clear_error_msg} from '../store/actions/errorAction'

function Logout() {
    const dispatch = useDispatch()
    dispatch(clear_error_msg())
    dispatch(signout())
    
    return <Redirect to={"/"} />
}

export default Logout
