import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: LoginScreen,
    Home: HomeScreen,
  }),
);
