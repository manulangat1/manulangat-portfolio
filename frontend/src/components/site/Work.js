import React from 'react'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getProj} from '../../actions/projects'
import '../scss/main.scss'

class Work extends React.Component{
    componentDidMount(){
        this.props.getProj()
    }
    render(){
        return (
            <section id="work">
                <div className="container">
                <h1 class="lg-heading">My  <span class="text-secondary">Works</span></h1>
                <h2 class="sm-heading">Check out some of my works </h2>
                <div className="projects">
                {
                    this.props.projects.map(project => (
                        <div key={project.id}>
                            <a href={project.proj_url} target="_blank">
                                <img src={project.pic} alt="project" />
                            </a>
                            <a href={project.proj_url} target="_blank" className="btn-light"> <i class="fas fa-eye"></i> Project </a>
                            <a href={project.github} target="_blank" className="btn-dark"> <i class="fab fa-github"></i> View on github </a>
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                        </div>
                    ))
                }
                </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state =>({
    projects:state.projects.projects
})
export default connect(mapStateToProps,{getProj})(Work);