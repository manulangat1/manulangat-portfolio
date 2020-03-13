import React from 'react'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getPostDetail} from '../../actions/posts'
import { addComment} from '../../actions/comments'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';
import '../scss/main.scss'

import { MarkdownPreview } from "react-marked-markdown";

class Comment extends React.Component{
    state = {
        post:1,
        comment:""
    }
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();
        const { comment,post} = this.state
        const Comments = {
            post,
            comment
        }
        this.props.addComment(Comments)
        console.log(Comments)
    }
    render(){
        const {comment} = this.state
        return (
            <section id="blog">
                <div className="container">
                    <Link to="/blog">Go back</Link>
                <h1 class="lg-heading">Contact  <span class="text-secondary">Me</span></h1>
                <h2 class="sm-heading">This is how you can reach me. </h2>
                <div >
                    <div className="add">
                                <form onSubmit={this.onSubmit}>
                                    <input type="text" name="comment" value={comment} onChange={this.onChange} placeholder="enter your comment here" />
                                    <input type="submit" className="btn-lg" value="Comment" /> 
                                </form>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default connect(null,{addComment})(Comment);