import React, { useRef, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, Animated } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { styles } from '../App.styles';
import Button from '../components/Button';


const Welcome = ({ navigation }) => {
  const rotationAnim = useRef(new Animated.Value(0)).current;

  return (
    <LinearGradient
      style={{
        flex: 1
      }}
      colors={[COLORS.welcomePrimary, COLORS.secondary]}
    >
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Image 
            source={require("../assets/spinner.png")}
            style={styles.imageContainer1}
          />
          <Image 
            source={require("../assets/spinner.png")}
            style={styles.imageContainer3a}
          />
          <Image 
            source={require("../assets/spinner.png")}
            style={styles.imageContainer3b}
          />
          <Image 
            source={require("../assets/spinner.png")}
            style={styles.imageContainer2}
          />
        </View>

        {/* Content */}

        <View style={styles.contentContainer}>
          <Text style={styles.contentText1}>Let's Get</Text>
          <Text style={styles.contentText1}>Started</Text>
          <View>
            <Text style={styles.contentText3}>Conect with each other with chatting</Text>
            <Text style={styles.contentText4}>Calling, Enjoy Safe and private texting</Text>
          </View>
          <Button 
            title="Join Now"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>

      </SafeAreaView>
    </LinearGradient>
  )
}

export default Welcome;