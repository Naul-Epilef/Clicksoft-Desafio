import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

import api from '../config/api';

import UserInterface from '../interfaces/Users';

const User = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    api
      .get('/users')
      .then(users => {
        setUsers(users.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const list = users.map(user => {
    <>
      <Text>user.id: {user.id}</Text>
      <Text>user.name: {user.name}</Text>
      <Text>user.username: {user.username}</Text>
      <Text>user.email: {user.email}</Text>
      <Text>user.website: {user.website}</Text>
    </>;
  });

  return <Text>list</Text>;
};

export default User;
