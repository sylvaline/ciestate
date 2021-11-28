import {ERROR_MSG, CLEAR_ERROR_MSG} from './types'

export const error_msg = (msg, status, id = null) => {
    return{
        type : ERROR_MSG,
        payload : {msg, status, id}
    }
}

export const clear_error_msg = () => {
    return{
        type : CLEAR_ERROR_MSG
    }
}