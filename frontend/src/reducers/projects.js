import { GET_PROJ } from "../actions/types";

const initialState= {
    projects:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_PROJ:
            return{
                ...state,
                projects:action.payload
            }
        default:
            return state
    }
}