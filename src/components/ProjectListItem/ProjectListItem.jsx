import React, { Component } from 'react';

export default class ProjectListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xs-4 col-lg-4">
        <div className="thumbnail">
          <img src={this.props.large_photo_url} />
          <div className="caption">
            <h3>{ this.props.title }</h3>
          </div>
        </div>
      </div>
    );
  }
}
