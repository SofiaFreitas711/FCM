import { createStackNavigator } from 'react-navigation-stack';
import EditProfile from '../pages/Profile/EditProfile';
import Profile from '../pages/Profile/Profile';

const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Perfil',
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: 'Editar perfil',
    }
  },
};

// home stack navigator screens
const ProfileStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default ProfileStack;