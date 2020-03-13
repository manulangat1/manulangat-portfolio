import axios from 'axios'
import { GET_CONTACT } from './types'


export const getCon = () => dispatch => {
    axios
        .get('/api/contacts/')
        .then(res => {
            dispatch({
                type:GET_CONTACT,
                payload:res.data
            })
            })
            .catch(err => console.log(err))
}