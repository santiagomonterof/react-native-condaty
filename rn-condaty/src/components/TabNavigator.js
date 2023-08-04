import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home/HomeScreen';
import HistoryScreen from '../pages/history/HistoryScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'black',
                },
                tabBarLabelStyle: {
                    color: 'white',
                },
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: 'white',
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'ios-home'; 
                    } else if (route.name === 'History') {
                        iconName = 'ios-document'; 
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;