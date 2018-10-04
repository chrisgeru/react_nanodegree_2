import React, {Component} from 'react';
import profiles from '../Data/DataProfiles';
import Profile from '../Components/Profile';

class ListProfiles extends Component {
  constructor(props) {
        super(props)
        this.movieId = this.props.movieId
        this.movieFansList = profiles.filter(profile => profile.favoriteMovieID === this.movieId)
    }  
  render() {
      return (
      <div>
          { this.movieFansList.length > 0 ? <p>Liked By:</p>:
            <p>None of the current users liked this movie</p> }
          <ul>{ this.movieFansList.map(profile => <Profile key={profile.id} userId={profile.userID} />) }</ul>
      </div>
    )
  }
}

export default ListProfiles;