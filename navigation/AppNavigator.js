import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import RepositoryDetailsScreen from '../screens/RepositoryDetailsScreen';

const DetailsStack = createStackNavigator({
  Main: {
    screen: MainTabNavigator,
    /**
     * TODO: As the main screen is already being added in the createSwitchNavigator
     * we have to set the header to null, or it will be added twice.
     */
    navigationOptions: {
      header: null,
    },
  },
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
