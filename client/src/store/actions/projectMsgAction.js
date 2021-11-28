import {PROJECT_MSG, CLEAR_PROJECT_MSG} from './types'


export const project_msg = (msg, status, id=null) => {
    return{
        type : PROJECT_MSG,
        payload : {msg, status, id}
    }
}

export const clear_post_msg = () => {
    return{
        type : CLEAR_PROJECT_MSG
    }
}