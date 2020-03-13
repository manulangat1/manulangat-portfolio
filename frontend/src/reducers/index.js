import { combineReducers } from 'redux'
import home from './home'
import about from './about'
import pic from './pic'
import projects from './projects'
import contact from './contact'
import posts from './posts'
import comments from './comments'

export default combineReducers({
    home,
    about,
    pic,
    projects,
    contact,
    posts,
    comments
})