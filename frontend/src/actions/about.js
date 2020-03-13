import axios from 'axios'
import {GET_ABOUT } from './types'

export const getAbout = () => dispatch => {
    axios.get('/api/about/')
            .then(res => {
                dispatch({
                    type:GET_ABOUT,
                    payload:res.data
                })
            })
            .catch(err => console.log(err))
}