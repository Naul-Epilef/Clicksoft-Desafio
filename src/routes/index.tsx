import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Post from '../screens/Post/List';
import PostCreate from '../screens/Post/Form';
import User from '../screens/User';

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Post"
        tabBarOptions={{
          activeTintColor: '#2296f3',
          inactiveTintColor: 'black',
          style: {
            height: 55,
          },
          labelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Post"
          component={Post}
          options={route => ({
            tabBarLabel: 'Feed',
            tabBarIcon: ({focused, color, size}) => {
              const name = focused ? 'home' : 'home-outline';
              return <Ionicons name={name} size={35} color={color} />;
            },
          })}
        />
        <Tab.Screen
          name="PostCreate"
          component={PostCreate}
          options={route => ({
            tabBarLabel: 'Criar post',
            tabBarIcon: ({focused, color, size}) => {
              const name = focused ? 'add-circle' : 'add-circle-outline';
              return <Ionicons name={name} size={35} color={color} />;
            },
          })}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{tabBarLabel: 'Usuário', tabBarButton: () => null}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
