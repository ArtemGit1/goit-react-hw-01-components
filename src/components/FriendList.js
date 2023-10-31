import React from 'react';
import FriendListItem from './FriendListItem';
import styled from 'styled-components';

// Створення стилів для FriendList
const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListContainer>
  );
};

export default FriendList;