import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AccesScreen from './AccesScreen';
import QrsScreen from './QrsScreen';
import OrdersScreen from './OrdesScreen';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

const HistoryScreen = () => {

  const screenOptions = {
    tabBarLabelStyle: {
      fontSize: 14,
      color: '#ffffff',
    },
    tabBarStyle: {
      backgroundColor: '#3b3b3b', 
    },
    tabBarIndicatorStyle: {
      backgroundColor: '#00ff9d',
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="keyboard-arrow-left"
          size={20} 
          color="white"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.header_text}>Historial</Text>
      </View>
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Accesos" component={AccesScreen} />
          <Tab.Screen name="Qr" component={QrsScreen} />
          <Tab.Screen name="Pedidos" component={OrdersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3b3b', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b3b3b', 
    padding: 10,
  },
  header_text: {
    color: 'white',
    fontSize: 18,
  },
});

export default HistoryScreen;