import React from 'react'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getHome } from '../../actions/home'
import { getPic } from '../../actions/pic'


class Home extends React.Component{
    componentDidMount(){
        this.props.getHome()
        this.props.getPic()
    }
    render(){
        return (
            <div>
            {
                this.props.pic.map(pi => (
                    // <div></div>
                    <div className="bg-image"style={{ backgroundImage: `url('${pi.pic}')`}}>
            <main id="home">
                            {this.props.home.map(he => (
                                    <div key={he.id}>
                                        <h1 className="lg-heading">{he.firstName} <span className="text-secondary">{he.lastName}</span></h1>
                                        <h2 className="sm-heading">{he.details}</h2>
                                    </div>
                                
                            ))
                        }
                        <div className="icons">
                        <a href="#!">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#!">
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="#!">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="#!">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                    </main>
                    </div>
                    ))
                }
                </div>
            
        )
    }
}
const mapStateToProps = state =>({
    home: state.home.home,
    pic:state.pic.pic
})
export default connect(mapStateToProps,{getHome,getPic})(Home);