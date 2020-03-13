import React from 'react'
// import ReactMarkdown from 'react-markdown'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getPostDetail} from '../../actions/posts'
import { addComment} from '../../actions/comments'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';
import '../scss/main.scss'
import Highlight from 'react-highlight'

import { MarkdownPreview } from "react-marked-markdown";

class BlogItem extends React.Component{
    componentDidMount(){
        if (this.props.id){
            this.props.getPostDetail(this.props.id)
        }
    }
    state = {
        comment:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        if (this.props.id){
            const { comment } = this.state
            const comments = {
                post:this.props.id,
                comment:comment
            }
            this.props.addComment(comments)
            this.setState({comment:""})
        }
    }
    render(){
        const {comment} = this.state
        const {posts } = this.props
        return (
            <section id="blog">
                <div className="container">
                    <Link to="/blog">Go back</Link>
                <h1 class="lg-heading">Contact  <span class="text-secondary">Me</span></h1>
                <h2 class="sm-heading">This is how you can reach me. </h2>
                <div >
                    {/* <h1>{posts.title}</h1> */}
                    <Moment date={posts.sub} />
                     <Moment fromNow ago>{posts.sub}</Moment>
                    {/* <MarkdownPreview 
                            value={posts.body}
                            markedOptions={{
                                langPrefix: "hljs" //
                            }}
                        /> */}
                        <pre>
                        <Highlight className={posts.tags}  >
                            {/* {"code snippet to be highlighted"} */}
                            {posts.body}
                            </Highlight>
                            </pre>
                    <p>{posts.comment_count} comments</p>
                    {
                       posts.tags && posts.tags.map( tag => (
                            <div key={tag.id}>
                                <p>{tag.language}</p>
                            </div>
                        ))
                    }
                    <div className="add">
                                <form onSubmit={this.onSubmit}>
                                    <input type="text" name="comment" value={comment} onChange={this.onChange} placeholder="enter your comment here" />
                                    <input type="submit" className="btn-lg" value="Comment" /> 
                                </form>
                    </div>
                    <div className="comments">
                                <h1>Comments</h1>
                                {
                                    posts.comments && posts.comments.map(comment => (
                                        <div key={comment.id}>
                                            <p>{comment.comment}</p>
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
const mapStateToProps = (state, ownProps) =>({
    id: ownProps.match.params.id,
    posts:state.posts.post
})
export default connect(mapStateToProps,{addComment,getPostDetail})(BlogItem);