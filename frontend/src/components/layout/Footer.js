import React from 'react'
import ReactDOM from 'react-dom'
import '../scss/main.scss'

class Footer extends React.Component{
    getYear() {
        return new Date().getFullYear();
    }
    render(){
        return (
            <footer>
                <p>
                copyright &copy; {this.getYear()} Kipchirchir Langat
                </p>
            </footer>
        )
    }
}

export default Footer;