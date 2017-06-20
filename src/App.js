import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'

class App extends Component {

  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

// **lifecycle method taht shold be used to fetch the data from
// example an ajax call or however retrieve it
// the rest of them are in documentation. lifecycle methods
  componentWillMount(){
    this.setState({
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {title: 'Social App',
        category: 'Mobile Dev'
        },
        {title: 'Ecommerce Cart',
        category: 'Web Dev'
        }
      ]
    })
  }







  render() {
    return (
      <div className="App">
      <AddProject/>
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
