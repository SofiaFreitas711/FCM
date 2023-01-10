import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../screen/Onboarding';
import Login from '../screen/Authenticate/Login';
import Register from '../screen/Authenticate/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export default AuthStack;
