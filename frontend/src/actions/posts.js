import axios from 'axios'
import { GET_POST, GET_POST_DETAIL, ADD_POST } from './types'


export const getPost = () => dispatch => {
    axios.get('/api/posts/')
            .then(res => {
                dispatch({
                    type:GET_POST,
                    payload:res.data
                })
            })
            .catch(err => console.log(err))
}
export const getPostDetail = ( id ) => dispatch => {
    axios.get(`/api/posts/${id}/`)
            .then(res => {
                dispatch({
                    type:GET_POST_DETAIL,
                    payload:res.data
                })
            })
            .catch(err => console.log(err))
}
