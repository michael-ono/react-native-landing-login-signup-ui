import React from 'react';
import { View, Text, Image, SafeAreaView, Animated } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { styles } from '../App.styles';
import { MaterialIcons } from '@expo/vector-icons';

const ConfirmEmail = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.confirmEmailView}>
        <Text style={styles.confirmEmailText}>Confirm your email address</Text>
        <MaterialIcons name="mark-email-read" size={50} color={COLORS.orange} />
      </View>
    </SafeAreaView>
  );
}

export default ConfirmEmail;