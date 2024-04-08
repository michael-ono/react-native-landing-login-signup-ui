import React from 'react';
import { View, Text, Image, SafeAreaView, Animated, TextInput } from 'react-native';
// import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { styles } from '../App.styles';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';

const ConfirmEmail = ({ navigation }) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.confirmEmailView}>
        <Text style={styles.confirmEmailText}>Kindly confirm your email address</Text>
        <MaterialIcons name="mark-email-read" size={50} color={COLORS.welcomePrimary} />

        <View style={{flex: 1, width: '100%', paddingHorizontal: 50}}>
            <View style={styles.inputContainerOuter}>
              <View style={styles.inputContainer}>
                <TextInput
                style={styles.inputContainerTextInput}
                placeholder='Enter the 6 digit code sent to you'
                placeholderTextColor={"grey"}
                />
              </View>
            </View>
            <Button
                title="Join Now"
                onPress={() => navigation.navigate("Home")}
                style={{backgroundColor: COLORS.welcomePrimary, borderColor: COLORS.welcomePrimary}}
                filled
            />
        </View>

        
      </View>
    </SafeAreaView>
  );
}

export default ConfirmEmail;