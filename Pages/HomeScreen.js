import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
const HomeScreen = () => {
  return (
    <View style={
      styles.component
    }>
     <Header/>
     <Hero/>
     <Card/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
component:{
  marginTop:34,
}
})