import React, { Component } from 'react';
class Counter extends Component {
    // state={
        
    //     value:this.props.counter.value,
    //     tag : ["tag1" ,"tag2", "tag3"]
    // };


  

    // }

    
    // incrementClickMinez =()=>{
    //     if (this.state.count1>0)
    //      {this.setState({count1:this.state.count1-1})}   

    // }


    // renderTags (){

    //     if (this.state.tag.length===0 ) return <h1>there is no tag</h1>

    //     return  <ul> {this.state.tag.map(tag =><li key={tag}>{tag}</li>)}</ul>

    // }       
 
    
    render() { 

        
        return (  
            <div>
                {/* <h3>Navbar <span className=" btn-secondary btn-sm">{ this.state.count}</span></h3>
                <h3><button className="btn btn-primary m-2 btn-sm">Reset</button></h3> */}
                {/* <span className=" btn-primary btn-sm m-2">{this.state.count1}</span>
                <button onClick={ this.incrementClickPlus} className="btn btn-secondary m-2 btn-sm">+</button>
                <button onClick={ this.incrementClickMinez} className="btn btn-secondary m-2 btn-sm">-</button> */}
               
                


                <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                  <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
                {/* {this.renderTags()} */} 
                
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter
        return value===0 ? 'Zero' : value;
    }
    
}


export default Counter;