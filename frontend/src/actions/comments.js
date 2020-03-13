import { GET_POST, GET_POST_DETAIL, ADD_POST } from './types'
import axios from 'axios'

export const addComment = (Comments) => dispatch => {
    axios
        .post("/api/posts/create/comment/",Comments)
         .then(res => {
                dispatch({
                    type:ADD_POST,
                    payload:res.data
                })
            })
         .catch(err => console.log(err))
}