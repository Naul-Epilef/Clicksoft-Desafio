import React from 'react';

import {Router, Scene} from 'react-native-router-flux';

import Home from './home';
import User from './user';
import Post from './post';

const Routes = () => {
  return (
    <Router>
      <Scene key="pri" tabs={true} tabBarPosition="bottom">
        <Scene key="Home" title="Inicio" component={Home} initial={true} />
        <Scene key="sec" tabs={true} tabBarPosition="bottom" back={true}>
          <Scene
            key="User"
            title="Usuário"
            component={User}
            back={true}
            hideTabBar={true}
          />
          <Scene
            key="Post"
            title="Post"
            component={Post}
            back={true}
            hideTabBar={true}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default Routes;
