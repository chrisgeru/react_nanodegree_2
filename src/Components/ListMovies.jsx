import React, {Component} from 'react';
import movies from '../Data/DataMovies';
import Movie from '../Components/Movie';

class ListMovies extends Component {
  render(){
    return ( 
      <div>
      	{Object.keys(movies).map(id => (
          <Movie key={movies[id].id} movie={movies[id]} />
        ))
        }
      </div>
    )
  }
}

export default ListMovies;