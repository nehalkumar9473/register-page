import React from 'react'
import Button from '../components/Button'
import { View, Text, StyleSheet } from 'react-native'

export default function Dashboard({ navigation, firstName, lastname }) {
  return (
    <View>
      <Text>Hi {firstName} {lastname}</Text>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'RegisterScreen' }],
          })
        }
      >
        Logout
      </Button>
    </View>
  )
}
