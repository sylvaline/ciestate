import React from 'react'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signout} from '../store/actions/authAction'

function Logout() {
    const dispatch = useDispatch()
    dispatch(signout())
    return <Redirect to={"/"} />
}

export default Logout
