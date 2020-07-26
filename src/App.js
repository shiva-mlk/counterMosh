import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters'
import Navbar from './components/navbar'

class App extends Component {
  state = { 
    counters:[
        {id:1 , value:4},
        {id:2 , value:0},
        {id:3 , value:0},
        {id:4 , value:0}
    ],
    Navbar:0
 }
incrementClickDelete =(element)=>{
    const new_counte = this.state.counters.filter(e=>(e.id !==element));
    
    // {this.setState({value:this.state.value=0})}  
    this.setState({counters:new_counte}) 
}
incrementClickReset=()=>{
    const counters=this.state.counters.map(c=>{
        c.value=0 
        return c
       
    }
    )
        
    this.setState({counters})
}

incrementalClick=(element)=>{
    const counters=[...this.state.counters];
    counters[counters.indexOf(element)].value++;
    

    this.setState({counters})
       }


  render(){
    return (
      <React.Fragment>
      <Navbar totalCounter={this.state.counters.filter(c=>c.value >0).length}/>
      <main className="container"></main>
      <Counters onReset={this.incrementClickReset} 
      onDelete={this.incrementClickDelete} 
      onIncrement={this.incrementalClick}
      counters={this.state.counters}/>
      </React.Fragment>
    );
  }
  }
export default App;
