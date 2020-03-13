import React from 'react'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getAbout } from '../../actions/about'
import '../scss/main.scss'

class About extends React.Component{
    componentDidMount(){
        this.props.getAbout()
    }
    render(){
        return (
            <section id="about">
                <div className="container">
                <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>
                <h2 class="sm-heading">Let me tell you a little bit more about me</h2>
                {
                    this.props.about.map(h => (
                        <div key={h.id}>
                            <div className="about-info">
                                <div>
                            <img src={h.pic} alt="Kipchirchir Langat" className="bio-image" />
                            </div>
                            <div>
                            <div className="bio">
                                <h3 className="lg-about">{h.title}</h3>
                                <p>{h.bio}</p>
                                <p>{h.details}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))
                }
                </div>
            </section>
        )
    }
}
const mapStateToProps = state =>({
    about: state.about.about
})
export default connect(mapStateToProps,{getAbout})(About);