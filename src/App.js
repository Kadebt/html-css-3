import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      mobileMenuOpen: false,
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu(){
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }
  render(){
  return(
    <div className="body">
      <header>
        <h3>Start Bootstrap</h3>
        <ul className="desktop-parent">
          <li className="desktop-child">SERVICES</li>
          <li className="desktop-child">PORTFOLIO</li>
          <li className="desktop-child">ABOUT</li>
          <li className="desktop-child">TEAM</li>
          <li className="desktop-child">CONTACT</li>
        </ul>
        <img 
        onClick={this.toggleMobileMenu}
        className="hamburger"
        src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png" alt="hamburger"/>
        <ul className={`phone-parent ${this.state.mobileMenuOpen ? 'phone-parent-open' : null}`}>
          <li className="phone-child">SERVICES</li>
          <li className="phone-child">PORTFOLIO</li>
          <li className="phone-child">ABOUT</li>
          <li className="phone-child">TEAM</li>
          <li className="phone-child">CONTACT</li>
        </ul>
      </header>
      <div className="main">
        <h2>Welcome To Our Studio</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button>TELL ME MORE</button>
      </div>
    </div>
    );
}
}
export default App;
