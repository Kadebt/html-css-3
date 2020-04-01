import React, {Component} from 'react';
import './App.css';

class App extends Component() {
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
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FHamburger_icon.svg%2F1200px-Hamburger_icon.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHamburger_button&tbnid=BqxWBiHkEOlgpM&vet=12ahUKEwj1sdndp8joAhUTiJ4KHb5FDxkQMygAegUIARCeAg..i&docid=CXa0WlIhS1elWM&w=1200&h=1200&q=hamburger%20menu&ved=2ahUKEwj1sdndp8joAhUTiJ4KHb5FDxkQMygAegUIARCeAg"/>
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
