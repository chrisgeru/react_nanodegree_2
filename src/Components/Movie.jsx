import React, {Component} from 'react';
import ListProfiles from '../Components/ListProfiles';

class Movie extends Component {
  render(){
    return ( 
      <div>
        <h3 className="movie-title" >{this.props.movie.name}</h3>
        <ListProfiles movieId={String(this.props.movie.id)} />
      </div>
    )
  }
}

export default Movie;