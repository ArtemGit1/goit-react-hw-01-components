import React from 'react';
import styled from 'styled-components';

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const StatusIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
  margin-right: 5px;
`;

const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const FriendName = styled.p`
  font-size: 18px;
  color: #333;
`;

const FriendListItem = ({ avatar, name, online }) => {
  return (
    <FriendItem>
      <StatusIcon online={online}></StatusIcon>
      <FriendAvatar src={avatar} alt={`${name}'s avatar`} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};


export default FriendListItem;
