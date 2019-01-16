import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { TabBarIcon } from '../components/common';
import RepositoriesScreen from '../screens/RepositoriesScreen';
import DevelopersScreen from '../screens/DevelopersScreen';
import Colors from '../constants/Colors';

const RepositoriesStack = createStackNavigator({
  Repositories: RepositoriesScreen,
});

RepositoriesStack.navigationOptions = {
  tabBarLabel: 'Repositories',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-code' : 'md-code'}
    />
  ),
};

const DevelopersStack = createStackNavigator({
  Developers: DevelopersScreen,
});

DevelopersStack.navigationOptions = {
  tabBarLabel: 'Developers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="logo-github" />
  ),
};

const bottomTabNavigatorConfigs = {
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
  },
};

export default createBottomTabNavigator(
  {
    RepositoriesStack,
    DevelopersStack,
  },
  bottomTabNavigatorConfigs,
);
