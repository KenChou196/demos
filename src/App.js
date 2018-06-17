import React, { Component } from 'react';
import Header from './component/header.js';
import Slider from './component/slider.js';
import ProductList from './component/product.js';
import LeftBar from './component/leftBar.js';
import Footer from './component/footer.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'adfkajkdjakf'
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Slider />
        <div className="container">
          <LeftBar />
          <ProductList />
        </div>
          <Footer />
        <div id="myModal" className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id="img01" alt=""/>
          <div id="caption"></div>
        </div>
      </div>
    );
  }
}

export default App;
