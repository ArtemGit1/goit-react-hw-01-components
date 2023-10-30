import React from 'react';
import user from './user.json';
import Profile from './Profile.js';
import data from './data.json';
import Statistics from './Statistics.js';
import friends from './friends.json';
import FriendList from './FriendList.js';
import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory.js';

export const App = () => {
  return (
    <div className="app">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
