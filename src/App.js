
import React, { Component } from "react";
import Dashboard from './Appbar/Appbar'

import "./App.css";
import Form from './Form.js'

class App extends Component {
  state = {
    fields:[]
  };

  onSubmits = updatedValue => {
    const field =  [...this.state.fields, updatedValue] 
    
    this.setState({ fields:field });
  };
  

  render() {
    return (
      <div className="App">
      <Dashboard />
        {/* <Form onChange={fields => this.onChange(fields)} /> */}
        {/* <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p> */}
         {/* <Form onSubmit ={fields => this.onSubmits(fields)} />
            {this.state.fields.map((n, index) => <div>name:{n.firstName} 
            LastName:{n.lastName}
            Email:{n.email}</div>)} */}
      </div>
    );
  }
}

export default App;