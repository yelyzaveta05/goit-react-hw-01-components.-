import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <Item>
            <Status status={isOnline} />
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </Item>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};