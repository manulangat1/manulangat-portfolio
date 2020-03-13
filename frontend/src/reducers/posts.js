import { GET_POST, GET_POST_DETAIL, ADD_POST } from "../actions/types";


const initialState = {
    posts:[],
    post:[],
    comment:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GET_POST:
            return{
                ...state,
                posts:action.payload
            }
        case GET_POST_DETAIL:
            return{
                ...state,
                post:action.payload
            }
        case ADD_POST:
            return{
                ...state,
                comment:[...state.posts.comments,action.payload]
            }
        default:
            return state
    }
}