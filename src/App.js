import React from 'react';
import './App.css';
import Q from './Q'

export default class App extends React.Component {

  constructor(props){

    super(props)

    this.state={

    }
  }

  render(){

    return (

      <center>
        <h1>App</h1>
        <Q/>
      </center>
    )
  }
}