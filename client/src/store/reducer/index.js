import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import project from './projectReducer'


export default combineReducers({
    auth : authReducer,
    error : errorReducer,
    project,
    
})