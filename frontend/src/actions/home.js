import axios from 'axios'

import {GET_HOME } from './types'


export const getHome = () => dispatch => {
    axios.get('/api/')
            .then(res => {
                dispatch({
                    type:GET_HOME,
                    payload:res.data
                })
            })
            .catch(err => console.log(err))
}