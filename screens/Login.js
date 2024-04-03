import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../App.styles'
import COLORS from '../constants/colors'
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.grey}}>
      <View style={styles.loginView}>

        <View style={{marginVertical: 20, paddingTop: 20 }}>
          <Text style={styles.loginText1}>Welcome back</Text>
        </View>

        <View style={styles.inputContainerOuter}>
          {/* <Text style={styles.signupTextEmail}>Email Address</Text> */}
          <View style={styles.inputContainer}>
            <TextInput 
            style={styles.inputContainerTextInput}
            placeholder='Email'
            placeholderTextColor={"grey"}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
            style={styles.inputContainerTextInput}
            placeholder='Password'
            placeholderTextColor={"grey"}
            secureTextEntry={!showPassword} // Hide password unless showPassword is true
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={toggleShowPassword} style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color='black' />
            </TouchableOpacity>
          </View>

        </View>

        <Button 
          style={{backgroundColor: COLORS.welcomePrimary, borderColor: COLORS.welcomePrimary}} 
          title="Sign In" 
          onPress={() => navigation.navigate("Home")} 
          filled
        />

        <Text 
          style={styles.loginText2}
        >
          Forgot password
        </Text>
        <Text 
          style={{color: "grey", fontSize: 12, paddingTop: 16}}
          onPress={() => navigation.navigate("Signup")}
        >
          New member?
        </Text>

      </View>
    </SafeAreaView>
  )
}

export default Login;