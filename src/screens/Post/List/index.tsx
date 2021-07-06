import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, AsyncStorage} from 'react-native';

import {
  ButtonDelete,
  TextBody,
  TextTitle,
  ViewPost,
  TextUser,
  ViewMain,
  TextDelete,
} from './styles';

import api from '../../../config/api';
import PostInterface from '../../../interfaces/Post';
import UserInterface from '../../../interfaces/User';
import NavigationReq from '../../../interfaces/NavigationReq';

const Post = ({navigation}: NavigationReq) => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [users, setUsers] = useState<UserInterface[]>([]);

  const returnUserNameById = (id: number): string => {
    const name = users.find(user => user.id === id)?.name;
    return name ? name : 'userName' + id.toString;
  };

  const validateStorage = async (): Promise<boolean> => {
    const res = await AsyncStorage.getItem('ClicksoftPosts');
    if (res === null) return false;

    return true;
  };

  const retrieveStorage = async (): Promise<PostInterface[]> => {
    const res = (await AsyncStorage.getItem('ClicksoftPosts')) as string;
    const p = JSON.parse(res);
    setPosts(p);
    return p;
  };

  const setStorage = async (p: PostInterface[]): Promise<void> => {
    await AsyncStorage.setItem('ClicksoftPosts', JSON.stringify(p));
    setPosts(p);
  };

  const deletePost = async (id: number): Promise<void> => {
    const p = await retrieveStorage();

    let index = -1;
    p.forEach((v, i) => {
      if (v.id === id) {
        index = i;
      }
    });

    if (index > -1) p.splice(index, 1);

    await setStorage(p);

    navigation.navigate('Post');
  };

  useEffect(() => {
    if (validateStorage()) {
      retrieveStorage();
    } else {
      api
        .get('/posts')
        .then(posts => {
          const data = posts.data;

          setStorage(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [posts]);

  useEffect(() => {
    api
      .get('/users')
      .then(users => {
        const data = users.data;

        setUsers([users, ...data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [users]);

  return (
    <SafeAreaView key="General">
      <ScrollView key="SubGeneral">
        <ViewMain key="main">
          {posts.map(post => (
            <ViewPost key={'View' + post.id}>
              <TextUser
                key={returnUserNameById(post.userId)}
                onPress={() => navigation.navigate('User', {id: post.userId})}>
                {returnUserNameById(post.userId)}
              </TextUser>
              <TextTitle key={post.title}>{post.title}</TextTitle>
              <TextBody key={post.body}>{post.body}</TextBody>
              <ButtonDelete
                key="DeletePost"
                onPress={() => {
                  deletePost(post.id);
                }}>
                <TextDelete>Excluir</TextDelete>
              </ButtonDelete>
            </ViewPost>
          ))}
        </ViewMain>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;
