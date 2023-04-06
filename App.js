import {View, Text, StyleSheet} from "react-native"

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'

export default function(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
