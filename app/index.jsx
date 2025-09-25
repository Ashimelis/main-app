import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../src/Screen/LoginScreen";
import SignupScreen from '../src/Screen/SignupScreen';
import Home from '../src/Screen/Home';

const Stack = createStackNavigator();

export default function MyStack() {
return (
<Stack.Navigator>
<Stack.Screen name="login" component={LoginScreen} />
<Stack.Screen name="signup" component={SignupScreen} />
<Stack.Screen name="home" component={Home} />
</Stack.Navigator>
);
}


