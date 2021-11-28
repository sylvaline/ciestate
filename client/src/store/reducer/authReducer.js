import {USER_LOADED, AUTH_ERROR, LOGIN_FAIL,REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, IS_LOADING} from '../actions/types'



const initialState = {
    token : localStorage.getItem("token"),
    is_loading : false,
    user : localStorage.getItem('user'),
    success_msg : "",
    is_authenticated : null
}


 function authReducer(state = initialState, action){

    switch(action.type){
        case IS_LOADING:
            return{
                ...state,
                is_loading : true
            }

        case USER_LOADED:
        localStorage.setItem('user', JSON.stringify(action.payload.user))  
            return{
                ...state,
                user : action.payload,
                is_authenticated : true,
                is_loading : false
            } 
          
            
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token)  
        localStorage.setItem('user', JSON.stringify(action.payload.user))  
            return{
                ...state,
                ...action.payload,
                success_msg : action.payload.msg,
                is_loading : false,
                is_authenticated : true
            } 
          

        case AUTH_ERROR:
        case LOGIN_FAIL:        
        case LOGOUT_SUCCESS:        
        case REGISTER_FAIL:        
        localStorage.removeItem('token')  
        localStorage.removeItem('user')  
            return{
                ...state,
                user : null,
                success_msg : "",
                is_loading : false,
                is_authenticated : false,
                token : null
            }     

        default :
           return state
    }

}


export default authReducer