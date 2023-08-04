import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './src/components/TabNavigator';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomHeaderIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ paddingRight: 16 }}>
        <Image source={require('./assets/logo.png')} style={{ width: 48, height: 32 }} />
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'black',
            width: 220,
          },
          drawerItemStyle: {
            backgroundColor: 'rgba(0, 255, 157, 0.5)',
          },
          drawerLabelStyle: {
            color: 'white',
          }
        }}
      >
        <Drawer.Screen
          name="home"
          component={TabNavigator}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitle: '',
            headerTintColor: "white",
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={32}
                backgroundColor="black"
                onPress={() => navigation.toggleDrawer()}
              ></Icon.Button>
            ),
            headerRight: () => (
              <CustomHeaderIcon onPress={() => navigation.toggleDrawer()} />
            ),
          })}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;