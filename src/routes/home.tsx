import React from 'react';

import {Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Home = () => (
  <>
    <Text>Inicio</Text>
    <Button title="Usuários" onPress={() => Actions.User()} color="#841584" />
    <Button title="Postagens" onPress={() => Actions.Post()} color="#841584" />
  </>
);

export default Home;
