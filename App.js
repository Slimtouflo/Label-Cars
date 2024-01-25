import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from "./routes/Home";
import CarList from "./routes/CarList";
import CarDetail from "./routes/CarDetail";
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2d4f6c',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {color: 'white'}
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: '',
            headerTitle: () => (
              <Image
                style={{ width: 50, height: 25 }}
                source={require('./assets/logo-transparent.png')}
              />
            )
          }}
        />
        <Stack.Screen name='CarList' component={CarList} options={{title: 'Nos véhicules'}}/>
        <Stack.Screen name='CarDetail' component={CarDetail} options={{title: 'Nom du véhicule'}}/>
      </Stack.Navigator>
    </NavigationContainer >
  );
}