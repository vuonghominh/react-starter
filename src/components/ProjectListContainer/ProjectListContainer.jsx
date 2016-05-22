import React, { Component } from 'react';
import ProjectListItem from '../ProjectListItem/ProjectListItem';

export default class ProjectListContainer extends Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    $.ajax({
      url: "http://localhost:3000/api/v1/posts",
      dataType: 'json',
      data: {page: 1, per_page: 5},
      headers: {
        'Http-Auth-Token': localStorage.getItem('token')
      },
      success: function(response) {
        this.setState({projects: response.data});
      }.bind(this)
    });
  }

  render() {
    return (<div className="row"> {this.renderItems()} </div>);
  }

  renderItems() {
    return this.state.projects.map(function(project){
      return <ProjectListItem key={project.id} {...project} />;
    });
  }
}
