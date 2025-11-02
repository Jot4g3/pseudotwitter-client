// FALTA FAZER LOGOUT

import '../styles/UserProfileChip.css';
import getAvatarLetter from '../util/getAvatarLetter';
import { Link } from 'react-router-dom';

function UserProfileChip({ username }) {
    const avatarLetter = getAvatarLetter(username);

    return (
        <Link to={`/${username}`} className='profile-chip-link'>
            <div className="user-profile-chip">
                <div className="chip-avatar">
                    <span>{avatarLetter}</span>
                </div>
                <span className="chip-username">{username}</span>
            </div>
        </Link>
    );
}

export default UserProfileChip;