import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

import api from '../../config/api';

import UserInterface from '../../interfaces/User';

const User = (props: any) => {
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    const id = props.route.params.id;

    api
      .get(`/users/${id}`)
      .then(user => {
        setUser(user.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView key="General">
      <ScrollView key="SubGeneral">
        {user && (
          <View key={'View' + user.id} style={styles.container}>
            <Text key={user.id}>{user.id}</Text>
            <Text key={user.name}>{user.name}</Text>
            <Text key={user.username}>{user.username}</Text>
            <Text key={user.email}>{user.email}</Text>
            <Text key={user.website}>{user.website}</Text>
          </View>
        )}
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
