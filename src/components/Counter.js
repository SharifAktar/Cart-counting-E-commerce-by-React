import React, { Component } from 'react'

class Counter extends Component {
    state ={
       value:0
       
        // imageUrl: "https://picsum.photos/200",
    };
        styles ={
            fontSizes:20,
            fontWeight: "bold",
       };
    
 // Handling Events //
//  constructor (){
//      super();
//      this.handleIncrement  = this.handleIncrement.bind(this);
//  }
       handleIncrement = product => {
           console.log(product);
        
        // Updating the State
        this.setState({value: this.state.value + 1 });
    };
    //    renderTags (){
    //        if ( this.state.tags.length === 0)
    //         return <p> There are not tags!  </p>;

    //         return <ul>  {this.state.tags.map(tag =><li key={tag}>{tag} </li> )}
    //              </ul>

    //         }
            getBadgeClasses (){
                let classes = "badge m-2 badge-"
                classes += this.state.value === 0 ? "warning": "primary";
                return classes;
            }

            formatCount(){
                const { value} = this.state;
                return value === 0 ? 'Zero' : value;//Embedding Expressions
            }
                render() {
            console.log("props", this.props);
        return (
            <div>
            {/* // Setting Attributes// */}
            {/* <img src={this.state.imageUrl} alt=""/>  */}
            <span style= {this.styles} 
            className= {this.getBadgeClasses ()}> {this.formatCount()} </span> 
            <button 
            // Handling Events //
            
            onClick ={this.handleIncrement}
            className="btn btn-secondary btn-sm">
           Add to Cart </button>
            <button 
            onClick={()=> this.props.onDelete(this.props.id)} 
            className ="btn btn-danger btn-sm m-2">Delete </button>
            
    </div>
            
        )
    }

}
export default Counter;

