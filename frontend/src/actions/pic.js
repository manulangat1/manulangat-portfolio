import axios from 'axios'
import { GET_PIC } from './types'

export const getPic = () => dispatch => {
    axios.get('/api/pic/')
            .then(res => {
                dispatch({
                    type:GET_PIC,
                    payload:res.data
                })
            })
            .catch(err => console.log(err))
}