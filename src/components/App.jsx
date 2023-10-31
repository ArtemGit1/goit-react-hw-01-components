import React from 'react';
import user from './Profile/user.json';
import Profile from './Profile/Profile.js';
import data from './Statistic/data.json';
import Statistics from './Statistic/Statistics.js';
import friends from './Friends/friends.json';
import FriendList from './Friends/FriendList.js';
import transactions from './Transactions/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory.js';

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
