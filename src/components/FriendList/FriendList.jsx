import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>{friends.map(({ avatar, name, isOnline, id }) => (
            <Item key={id}>
                <Status status={isOnline}/>
                <Avatar src={avatar} alt={name} width="48" />
                <Name>{name}</Name>
            </Item>
        ))}
        </List>
    )
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    ).isRequired,
}