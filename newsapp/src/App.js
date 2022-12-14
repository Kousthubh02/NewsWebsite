
import './App.css';

import React, { Component } from 'react'
import { Navbar } from './Components/Navbar';
import { News } from './Components/News';


export default class App extends Component {
   pageSize=5;

  render() {
    return (
      <div>
        
        <Navbar/>
      <News pageSize={this.pageSize} country="In" category="Science"/>
      </div>
    )
  }
}

