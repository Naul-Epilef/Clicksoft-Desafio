import React, {useEffect, useState} from 'react';
import {AsyncStorage, Button} from 'react-native';

import api from '../../../config/api';

import {ViewMain, TextInputTitle, TextInputBody, PickerUser} from './styles';

import PostInterface from '../../../interfaces/Post';
import UserInterface from '../../../interfaces/User';
import NavigationReq from '../../../interfaces/NavigationReq';

const FormPost = ({navigation}: NavigationReq) => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [userId, setUserId] = useState<number>(1);

  useEffect(() => {
    api
      .get('/users')
      .then(res => {
        const users = res.data;
        setUsers(users);
      })
      .catch(err => {
        console.error(err);
      });
  }, [users]);

  const createPost = async () => {
    api
      .post('/posts', {title, body, userId})
      .then(async res => {
        if (res.status === 201) {
          const p = JSON.parse(
            (await AsyncStorage.getItem('ClicksoftPosts')) as string,
          ) as PostInterface[];

          const lastId = p[p.length - 1].id;

          p.push({id: lastId + 1, title, body, userId} as PostInterface);

          setTitle('');
          setBody('');
          setUserId(1);

          await AsyncStorage.setItem('ClicksoftPosts', JSON.stringify(p));
          return navigation.navigate('Post');
        }

        console.error(res.statusText);
      })
      .catch(err => console.log(err));
  };

  return (
    <ViewMain key="Main">
      <TextInputTitle
        key="title"
        placeholder="Título"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInputBody
        key="body"
        placeholder="Post"
        value={body}
        onChangeText={text => setBody(text)}
      />
      <PickerUser
        key="userId"
        selectedValue={userId.toString()}
        onValueChange={value => setUserId(Number(value))}>
        {users.map(user => {
          const id = user.id as number;
          return (
            <PickerUser.Item key={id} label={user.name} value={id.toString()} />
          );
        })}
      </PickerUser>
      <Button key="Enviar" title="Enviar" onPress={() => createPost()} />
    </ViewMain>
  );
};

export default FormPost;
