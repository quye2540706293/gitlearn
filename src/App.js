import React, { Component } from 'react'
import { Button } from 'antd';
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  
  render() {
    return (
      <div>
      <Button type='primary' onClick={()=>this.h("1")}>学习</Button>
      </div>
    )
  
  }
  h=(agr1)=>{
    console.log("你好"+agr1)
  }

}

