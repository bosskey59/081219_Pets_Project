import { combineReducers } from 'redux'
import pets from './petsReducer'
import user from './userReducer'


export default combineReducers({
    pets,
    user
})
