import {createStackNavigator} from 'react-navigation-stack';
import Arts from '../pages/Arts/Arts';
import Art from '../pages/Arts/Art';
import Artist from '../pages/Arts/Artist';

const screens = {
  Arts: {
    screen: Arts,
    navigationOptions: {
      title: 'Obras',
    },
  },
  Artist: {
    screen: Artist,
    navigationOptions: {
      title: 'Artistas',
    },
  },
  Art: {
    screen: Art,
    navigationOptions: {
      title: 'Obra',
    },
  },
};

// home stack navigator screens
const GalleryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default GalleryStack;
