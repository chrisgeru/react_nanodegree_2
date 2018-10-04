import React, {Component} from 'react';
import users from '../Data/DataUsers';

class Profile extends Component {
    render() {
        return (
            <li>
            {users[this.props.userId].name}
            </li>
        )
    }
}

export default Profile;