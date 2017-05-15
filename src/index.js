import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './scenes/home'
import Explore from './scenes/explore'
import Contact from './scenes/contact'
import About from './scenes/about'
import Header from './components/header'
import Footer from './components/footer'
import './index.css'

ReactDOM.render(
  <Router>
    <div className='App container-fluid'>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/explore' component={Explore} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
)
