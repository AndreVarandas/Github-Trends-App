import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { TabBarIcon } from '../components/common';
import RepositoriesScreen from '../screens/RepositoriesScreen';
import DevelopersScreen from '../screens/DevelopersScreen';

const RepositoriesStack = createStackNavigator({
  Repositories: RepositoriesScreen,
});

RepositoriesStack.navigationOptions = {
  tabBarLabel: 'Repositories',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const DevelopersStack = createStackNavigator({
  Developers: DevelopersScreen,
});

DevelopersStack.navigationOptions = {
  tabBarLabel: 'Developers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  RepositoriesStack,
  DevelopersStack,
});
