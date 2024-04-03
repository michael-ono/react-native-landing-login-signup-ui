import React from 'react';
import { View, Text, Image, SafeAreaView, Animated } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { styles } from '../App.styles';

const Home = () => {

  return (
    // <LinearGradient
    //   style={{
    //     flex: 1
    //   }}
    //   colors={[COLORS.welcomePrimary, COLORS.secondary]}
    // >
      <SafeAreaView style={{flex: 1}}>

        <View style={styles.homeView}>
          <Text style={styles.homeText}>BLAZE</Text>
        </View>

      </SafeAreaView>
    // </LinearGradient>
  )
}

export default Home;