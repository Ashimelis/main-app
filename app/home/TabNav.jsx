import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../src/Screen/Home';
import Profile from "../../src/Screen/Profile";
import Networks from "../../src/Screen/Networks";
import Posts from "../../src/Screen/Posts";
import Notification from "../../src/Screen/Notification";

const Tab = createBottomTabNavigator();
function TabNavigator() {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={Home} />
<Tab.Screen name="Profile" component={Profile} />
<Tab.Screen name="Networks" component={Networks} />
<Tab.Screen name="Posts" component={Posts} />
<Tab.Screen name="Notification" component={Notification} />

</Tab.Navigator>
);
}
export default TabNavigator;