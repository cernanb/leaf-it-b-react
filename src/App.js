import React, { Component } from 'react'
import logo from './images/LeafItBlogo2.jpg'
import Home from './components/Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="min-vh-100 d-flex flex-column">
        <header>
          <div class="container">
            <nav class="navbar navbar-dark bg-transparenet">
              <a class="navbar-brand" href="#">
                Leaf It B
              </a>
              <span class="navbar-text ml-auto d-none d-sm-inline-block">(619) 494-1263 </span>
              <span class="navbar-text d-none d-sm-inline-block">leafitb18@gmail.com</span>
            </nav>
          </div>
        </header>
        <main class="my-auto">
          <div class="container">
            <h1 class="page-title">Under construction</h1>
            <p class="page-description">We are working on a new website design. Check back again soon!</p>
            <p>Stay connected</p>
            <nav class="footer-social-links">
              <a href="https://www.facebook.com/bananaleafcone/" target="_blank" class="social-link">
                <i class="mdi mdi-facebook-box"></i>
              </a>
              <a href="https://www.instagram.com/leaf.it.b" target="_blank" class="social-link">
                <i class="mdi mdi-instagram"></i>
              </a>
            </nav>
          </div>
        </main>
      </div>
    )
  }
}

export default App
