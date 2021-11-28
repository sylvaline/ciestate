
import {CREATE_PROJECT, DELETE_PROJECT, GET_ALL_PROJECT, PROJECT_MSG, SEARCH_PROJECT, GET_ALL_PROJECT_CATEGORIES, PROJECT_LOADING, EDIT_PROJECT, PROJECT_ERROR, GET_SINGLE_PROJECT} from '../actions/types'

const initialState = {
    searchedValue : '',
    projects : [],
    project_loading : false,
    categories : [],
    project_msg : {},
    faves : null,
    singleproject : {}
}


export default function project (state = initialState, action){

    switch(action.type){

        case PROJECT_LOADING:
            return{
                ...state,
                project_loading : true
            }
          

        case GET_ALL_PROJECT:
            return{
                ...state,
                project_loading : false,
                projects : action.payload
                
            }
           

        case CREATE_PROJECT:
            return{
                ...state,
                projects : [action.payload, ...state.projects],
                project_loading: false
            }  
           
            
        case SEARCH_PROJECT:
            return{
                ...state,
                searchedValue: action.payload,
                project_loading: false
            }  
           
            
        case DELETE_PROJECT:
            return{
                ...state,
                projects : state.projects.filter(project => project._id !== action.payload.id),
                project_loading: false
            }  
           

        case PROJECT_MSG:
            return{
                ...state,
                project_msg : action.payload
            }  
          
            
        case GET_ALL_PROJECT_CATEGORIES:
            return{
                ...state,
                categories : action.payload,
                project_loading : false
            } 
           
            
        case EDIT_PROJECT:
            return{
                ...state,
                projects : state.projects.map(project => project._id === action.payload.id ? action.payload.data : project )
               
            }  
          

        case GET_SINGLE_PROJECT:
            
            return {
                ...state,
                singleproject : action.payload
            } 
           
            
        case PROJECT_ERROR:
            return{
                ...state,
                project_loading : false
            } 
            
   
             
        default:
            return state
    }
}
