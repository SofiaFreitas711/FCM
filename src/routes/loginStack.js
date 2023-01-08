import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/Authenticate/Login';
import Register from '../pages/Authenticate/Register';

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Registar',
    }
  },
};

// home stack navigator screens
const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default LoginStack;