import React from 'react';
import FriendListItem from './FriendListItem';
import styled from 'styled-components';
import friendsData from './friends.json';

const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

const FriendList = () => {
  return (
    <FriendListContainer>
      {friendsData.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          online={friend.isOnline}
        />
      ))}
    </FriendListContainer>
  );
};

export default FriendList;
