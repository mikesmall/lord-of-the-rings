import React, { Component } from 'react';

class Movie extends Component {
  render () {
    return (
      <div>
        <h1>Star Wars - Episode {this.props.episode}: {this.props.title}</h1>
        <p>Length: {this.props.hours} hours and {this.props.minutes} minutes</p>
      </div>
    )
  }
}

export default Movie
