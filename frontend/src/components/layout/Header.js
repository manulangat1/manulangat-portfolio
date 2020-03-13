import React from 'react'
import ReactDOM from 'react-dom'
import { Link} from 'react-router-dom'
import '../scss/main.scss'

import { getPic } from '../../actions/pic'
import { connect } from 'react-redux'

class Header extends React.Component{
    state = {
        addClass:false
    }
    componentDidMount(){
        this.props.getPic()
    }
    //select DOM items
    toggle = e => {
        this.setState({addClass: !this.state.addClass});
        console.log(this.state.addClass)
    }
    closeMenu = e => {
        this.setState({addClass: false})
      }
    render(){    
        let boxClass = ["menu-btn"];
        let menu = ['menu']
        let menuNav =['menu-nav']
        let menuBranding = ['menu-branding']
        let navItems = ['nav-items']
        let current = ['current']
        if(this.state.addClass) {
            boxClass.push('close');
            menu.push('show');
            menuNav.push('show');
            menuBranding.push('show');
            navItems.push('show');

        }
        return (
            <header>
                <div className={boxClass.join(' ')}  onClick={this.toggle.bind(this)}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className={menu.join(' ')}>
                    <div className={menuBranding.join(' ')}>
                        
                        {
                            this.props.pic.map(pi =>(
                                <div className="portrait" style={{ backgroundImage: `url('${pi.pic}')`}}></div>
                            ))
                        }
                    </div>
                    <ul className={menuNav.join(' ')}>
                        <li className={navItems.join(' ')}><Link to="/" className="nav-link" onClick={this.closeMenu.bind(this)} >Home</Link></li>
                        <li className={navItems.join(' ')}><Link to="/about" className="nav-link" onClick={this.closeMenu.bind(this)}>About</Link></li>
                        <li className={navItems.join(' ')}><Link to="/projects" className="nav-link" onClick={this.closeMenu.bind(this)}>My Projects</Link></li>
                        <li className={navItems.join(' ')}><Link to="/contacts" className="nav-link" onClick={this.closeMenu.bind(this)}>How To Reach Me</Link></li>
                        <li className={navItems.join(' ')}><Link to="/blog" className="nav-link" onClick={this.closeMenu.bind(this)}>Blog</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

// export default Header;
const mapStateToProps = state =>({
    pic:state.about.about
})
export default connect(mapStateToProps,{getPic})(Header);