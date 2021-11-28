import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {search_project} from '../store/actions/projectActions'

function Search() {
    const dispatch = useDispatch()
    const [search_item, setSearch_item] = useState("")
    console.log(search_item)

    useEffect(()=>{
        dispatch(search_project(search_item))
    }, [search_item])

    return (
        <div className="search">
            <div className="search_style">
            <i className="fas fa-search"></i>
                <input type="text" value={search_item} name="search_item" onChange={(e)=>setSearch_item(e.target.value)} placeholder="Search for Projects" />
            </div>
        </div>
    )
}

export default Search
