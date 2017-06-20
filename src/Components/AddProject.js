import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

static defaultProps = {
  categories: ['Web Design', 'Web Dev', 'Mobile Dev']
}

handleSubmit(e){
  console.log(this.refs.title.value)
  e.preventDefault();
}

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
      <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title"/>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="Submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
