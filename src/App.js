import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

library.add(faClock);

// This is where the magic happens
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
};
export default App;
