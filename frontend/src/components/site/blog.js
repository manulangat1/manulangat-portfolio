import React from 'react'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getPost} from '../../actions/posts'
import '../scss/main.scss'
import { Link, browserHistory } from 'react-router-dom'
import { MarkdownPreview } from "react-marked-markdown";
import Moment from 'react-moment';
import 'moment-timezone';

class blog extends React.Component{
    componentDidMount(){
        this.props.getPost()
    }
    state = {
        comment:""
    }
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
        // console.log(this.state.comment)
    }
    onSubmit = e => {
        e.preventDefault();
        const {comment} = this.state
        const comments = {
            id:this.props.posts,
            comment
        }
        console.log(comments)
    }
    
    render(){
        const {comment} = this.state
        return (
            <section id="blog">
                <div className="container">
                <h1 class="lg-heading">Contact  <span class="text-secondary">Me</span></h1>
                <h2 class="sm-heading">This is how you can reach me. </h2>
                <div >
                    <div className="blogs">
                {
                    this.props.posts.map(post => (
                        <div key={post.id}  >
                            <h1 className="lg-blog">{post.title}</h1>
                            {/* <p>{post.body}</p> */}
                            <div className="bg-content">
                            <MarkdownPreview 
                            value={post.body}
                            markedOptions={{
                                langPrefix: "hljs" //
                            }}
                        />
                        </div>
                            <p>{post.comment_count} comments</p>
                            <Link to={`/blog/${post.id}/`}>Read more</Link>
                        </div>
                    ))
                }
                </div>
                </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state =>({
    posts:state.posts.posts
})
export default connect(mapStateToProps,{getPost})(blog);