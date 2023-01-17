import PropTypes from 'prop-types';
import { Container, Wrapper, Avatar, Name, Tag, Location, StatsList, StatsItem, Label, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats:{followers, views, likes} }) => {
    return <Container>
        <Wrapper>
            <Avatar src={avatar} alt="User avatar" />
            <Name> {username} </Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Wrapper>
        <StatsList>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatsItem>
        </StatsList>
    </Container>
}

Profile.prototypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }),
}