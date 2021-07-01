import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

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

  return (
    <SafeAreaView key="General">
      <ScrollView key="SubGeneral">
        {users.map(user => (
          <View key={'View' + user.id} style={styles.container}>
            <Text key={user.id}>{user.id}</Text>
            <Text key={user.name}>{user.name}</Text>
            <Text key={user.username}>{user.username}</Text>
            <Text key={user.email}>{user.email}</Text>
            <Text key={user.website}>{user.website}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});

export default User;
