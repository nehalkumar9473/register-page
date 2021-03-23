import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

import Button from '../components/Button'
import TextInput from '../components/TextInput'

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { mobileValidator } from '../helpers/mobileValidator'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState({ value: '', error: '' })
  const [lastName, setLastName] = useState({ value: '', error: '' })
  const [mobile, setMobile] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')

  const onSignUpPressed = () => {
    const firstNameError = nameValidator(firstName.value)
    const lastNameError = nameValidator(lastName.value)
    const mobileError = mobileValidator(mobile.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const confirmPasswordError = passwordValidator(confirmPassword.value)
    if (emailError || passwordError || confirmPasswordError
      || firstNameError || lastNameError || mobile || password !== confirmPassword) {
      setFirstName({ ...firstName, error: firstNameError })
      setLastName({ ...lastName, error: lastNameError })
      setMobile({ ...mobile, error: mobileError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError })
      return
    }
    // navigation.navigate('Dashboard')
    else (
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    )
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }} >

      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstName.value}
        onChangeText={(text) => setFirstName({ value: text, error: '' })}
        error={!!firstName.error}
        errorText={firstName.error}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastName.value}
        onChangeText={(text) => setLastName({ value: text, error: '' })}
        error={!!lastName.error}
        errorText={lastName.error}
      />
      <TextInput
        label="Mobile"
        returnKeyType="next"
        value={mobile.value}
        onChangeText={(text) => setMobile({ value: text, error: '' })}
        error={!!mobile.error}
        errorText={mobile.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={confirmPassword.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
        error={!!confirmPassword.error}
        errorText={confirmPassword.error}
        secureTextEntry
      />
      <CountryDropdown
        style={{
          width: '70%',
          fontSize: 20
        }}
        value={country}
        onChange={(val) => setCountry(val)} />
      <RegionDropdown
        style={{
          width: '70%',
          fontSize: 20
        }}
        country={country}
        value={region}
        onChange={(val) => setRegion(val)} />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={styles.button}
      >
        Sign Up
      </Button>

    </View>

  )
}

const styles = StyleSheet.create({
  button: {
    width: '40%',

    marginTop: 24
  }

})
