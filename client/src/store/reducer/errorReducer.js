import {ERROR_MSG, CLEAR_ERROR_MSG} from '../actions/types'

const initialState = {
    msg : "",
    status : null,
    id : null
}


export default function err (state = initialState, action){
    switch(action.type){
        case ERROR_MSG:
            return{
                msg : action.payload.msg,
                status : action.payload.status,
                id : action.payload.id
            }

        case CLEAR_ERROR_MSG:
            return{
                msg : "",
                status : null,
                id : null
            } 
            
        default:
            return state    
    }
}