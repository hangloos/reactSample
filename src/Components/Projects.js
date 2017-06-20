import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {


  render() {
    let projectItems;

    if(this.props.projects) {
      projectItems= this.props.projects.map(project => {
        return(
          <ProjectItem key={project.title} project={project}/>
          // project={project} is taking each item and pushing it to the
          // project item component with the data in project
          // so this.props.project gets the data
          // set the key name first with the actual data called projects
        )
      });
    }

    // each item is being assigned to projectItems above
    // so we can put {projectItems below and will display each one}
    console.log(this.props);
    return (
      <div className="Projects">
      {projectItems}

      </div>
    );
  }
}

export default Projects;
