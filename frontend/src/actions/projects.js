import axios from 'axios';
import { GET_PROJ } from './types';


export const getProj = () => dispatch => {
    axios
        .get('/api/projects/')
        .then(res => {
            dispatch({
                type:GET_PROJ,
                payload:res.data
            })
        })
        .catch(err => console.log(err))
}