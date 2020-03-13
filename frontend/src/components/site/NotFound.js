import React from 'react'
import ReactDOM from 'react-dom'
import '../scss/main.scss'
import { Link} from 'react-router-dom'
class Footer extends React.Component{
    render(){
        return (
            <section>
                <h1>The requested url could not be found.Click <Link to="/">here</Link> to go back to home page</h1>
            </section>
        )
    }
}

export default Footer;