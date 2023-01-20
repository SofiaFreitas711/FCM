import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import OnboardingComp from '../components/Onboarding/OnboardingComp';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <OnboardingComp />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  }
});

export default Onboarding;