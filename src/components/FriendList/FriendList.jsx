import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <List>{friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}  />
        ))}
        </List>
    )
}

FriendList.prototypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    ).isRequired,
}