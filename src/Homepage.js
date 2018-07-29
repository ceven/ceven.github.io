import React, { Component } from "react";
// import logo from './logo.svg';
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          {/*<img src={logo} className="Homepage-logo" alt="logo" />*/}
          <h1 className="Homepage-title">Caroline's Pages</h1>
        </header>
        <p className="Homepage-pages">
          <a href="https://ceven.github.io/stamp-duty-calculator/">
            Stamp Duty Calculator
          </a>
        </p>
        <footer className="Homepage-footer">
          <a href="https://github.com/ceven">My Github</a>
        </footer>
      </div>
    );
  }
}

export default Homepage;
