import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from '../App.styles'
import COLORS from '../constants/colors'

const Signup = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.signupView}>
        <Text>Signup</Text>
      </View>
    </SafeAreaView>
  )
}

export default Signup