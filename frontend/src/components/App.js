import React from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './App.css'
import './scss/main.scss'
import Home from './site/Home'
import About from './site/About'
import Work from './site/Work'
import Contact from './site/Contact'
import blog from './site/blog'
import BlogItem from './site/BlogItem'
import NotFound from './site/NotFound'
import Comment from './site/Comment'

import {HashRouter as Router, Route,Link,Switch} from 'react-router-dom'
//redux implementation
import { Provider } from 'react-redux'
import store from '../store'
class App extends React.Component{
    render(){
        return (
            <Provider  store={store}>
                <Router>
            <section id="app">
                <Header />
                <section id="fixed">
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Work} />
                <Route exact path="/contacts" component={Contact} />
                <Route exact path="/blog" component={blog} />
                <Route exact path="/comment" component={Comment} />
                <Route exact path="/blog/:id/" component={BlogItem} />
                <Route exact path="*" component={NotFound} />
                </Switch>
                </section>
                <Footer />
            </section>
            </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))