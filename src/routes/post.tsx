import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import api from '../config/api';
import PostInterface from '../interfaces/Post';

const Post = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    api
      .get('/posts')
      .then(posts => {
        setPosts(posts.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView key="General">
      <ScrollView key="SubGeneral">
        {posts.map(post => (
          <View key={'View' + post.id} style={styles.container}>
            <Text key={post.id}>{post.id}</Text>
            <Text key={post.userId}>{post.userId}</Text>
            <Text key={post.title}>{post.title}</Text>
            <Text key={post.body}>{post.body}</Text>
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
export default Post;
