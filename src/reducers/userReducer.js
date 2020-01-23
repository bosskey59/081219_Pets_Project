export default (state = {name:"alex", id:"1", age:21}, action) =>{
    switch(action.type){
        case "SET_USER":
            return {...action.payload}
        case "REMOVE_USER":
            return {}
        default:
            return state
    }
}