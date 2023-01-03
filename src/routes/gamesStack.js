import {createStackNavigator} from 'react-navigation-stack';
import Games from '../pages/Games/Games';
import Game from '../pages/Games/Game';
import Leaderboard from '../pages/Games/Leaderbord';

const screens = {
  Games: {
    screen: Games,
    navigationOptions: {
      title: 'Jogos',
    },
  },
  Game: {
    screen: Game,
    navigationOptions: {
      title: 'Jogo',
    },
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      title: 'Leaderboard',
    },
  },
};

// home stack navigator screens
const GamesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default GamesStack;
