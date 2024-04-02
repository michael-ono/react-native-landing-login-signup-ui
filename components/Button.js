import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../App.styles'
import COLORS from '../constants/colors'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlineColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlineColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            ...styles.button,
            ...{backgroundColor: bgColor},
            ...props.style
        }}
    >
        <Text style={{fontSize: 18, ...{color: textColor} }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button;