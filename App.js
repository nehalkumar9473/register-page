import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  RegisterScreen,
  Dashboard,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RegisterScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
