import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery'
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

class App extends Component {

  constructor() {
    super()
    this.state = {
      projects: [],
      todos: []
    }
  }

getTodos(){
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
    cache: false,
    success: function(data){
      this.setState({todos: data}, function(){
        console.log(this.state);
      })
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err)
    }
  });
}

getProjects(){
  this.setState({
    projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {id:uuid.v4(),title: 'Social App',
      category: 'Mobile Dev'
      },
      {id:uuid.v4(),title: 'Ecommerce Cart',
      category: 'Web Dev'
      }
    ]
  })
}
// **lifecycle method taht shold be used to fetch the data from
// example an ajax call or however retrieve it
// the rest of them are in documentation. lifecycle methods
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }


handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects});

  // so you dont want to set state. you want to get the state and then update
  // so get projects, then push project then set again
}


handleDeleteProject(id) {
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  // look through all and find the id that matches the one
  projects.splice(index,1);
  this.setState({projects: projects});
  //find the index and the remove it with splice then reset.
}

  render() {
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      <hr/>
      <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default App;
