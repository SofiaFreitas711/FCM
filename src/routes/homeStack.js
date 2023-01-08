import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Página Principal',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;