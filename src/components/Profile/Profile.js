import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid #333;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  background-color: #f4f4f4;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Tag = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;

const Location = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const StatsItem = styled.li`
  margin-right: 20px;
`;

const Label = styled.span`
  font-size: 16px;
  color: #333;
`;

const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <ProfileWrapper>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      <Stats>
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
      </Stats>
    </ProfileWrapper>
  );
};

export default Profile;
