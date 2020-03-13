import React from 'react'
// import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getCon} from '../../actions/contact'
// import '../scss/main.scss'

class Contact extends React.Component{
    componentDidMount(){
        this.props.getCon()
    }
    render(){
        return (
            <section id="contact">
                <div className="container">
                <h1 class="lg-heading">Contact  <span class="text-secondary">Me</span></h1>
                <h2 class="sm-heading">This is how you can reach me. </h2>
                </div>
                <div className="boxes" >
                {
                    this.props.contacts.map(contact => (
                        <div key={contact.id}  >
                            <div className="div">
                                <span class="text-secondary">Email:</span> <span className="sm">{contact.email}</span>
                            </div>
                            <div className="div">
                                <span class="text-secondary">Phone Number:</span> {contact.phone}
                            </div>
                            <div className="div">
                                <span class="text-secondary">Address:</span> {contact.Address}
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
    contacts:state.contact.contact
})
export default connect(mapStateToProps,{getCon})(Contact);