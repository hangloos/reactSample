import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {


  render() {
    let todoItems;

    if(this.props.todos) {
      todoItems= this.props.todos.map(todo => {
        return(
          <TodoItem key={todo.title} todo={todo}/>
          // project={project} is taking each item and pushing it to the
          // project item component with the data in project
          // so this.props.project gets the data
          // set the key name first with the actual data called projects
        )
      });
    }

    // each item is being assigned to projectItems above
    // so we can put {projectItems below and will display each one}
    return (
      <div className="Todos">
      <h3>Todo List</h3><br />
      {todoItems}

      </div>
    );
  }
}

export default Todos;
