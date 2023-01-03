import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

// stacks
import LoginStack from './loginStack'
import HomeStack from './homeStack';
import ProfileStack from './profileStack';
import GalleryStack from './galleryStack';
import NewsStack from './newsStack';
import GamesStack from './gamesStack';
import StoreStack from './storeStack';

// screens
import About from '../pages/AboutUs'



// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Login: {
    screen: LoginStack,
  },
  Profile: {
    screen: ProfileStack,
  },
  Home: {
    screen: HomeStack,
  },
  Gallery: {
    screen: GalleryStack,
  },
  News: {
    screen: NewsStack,
  },
  Games: {
    screen: GamesStack,
  },
  Store: {
    screen: StoreStack,
  },
  About: {
    screen: About,
  },
});

export default createAppContainer(RootDrawerNavigator);
