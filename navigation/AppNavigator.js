import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import RepositoryDetailsScreen from '../screens/RepositoryDetailsScreen';

const DetailsStack = createStackNavigator({
  Main: MainTabNavigator,
  RepositoryDetails: RepositoryDetailsScreen,
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Details: DetailsStack,
  }),
);
