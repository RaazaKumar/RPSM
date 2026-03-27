import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import data from './contaxt.js'
const HomeScreen = () => {
   const data = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/633/633611.png',
      name: 'Recharge',
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
      name: 'DTH',
    },
    {
      id: 3,
      image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
      name: 'AEPS',
    },
    {
      id: 4,
      image: 'https://cdn-icons-png.flaticon.com/512/3059/3059518.png',
      name: 'DMT',
    },
  ];

  const data1 = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png', // cash / CMS
    name: 'CMS',
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/2920/2920283.png', // toll / fastag
    name: 'Fastag',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png', // bill payment
    name: 'BBPS',
  },
  {
    id: 4,
    image: 'https://cdn-icons-png.flaticon.com/512/633/633611.png', // credit card
    name: 'Credit Card',
  },
  {
    id: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png', // loan
    name: 'Apply Loan',
  },
  {
    id: 6,
    image: 'https://cdn-icons-png.flaticon.com/512/891/891419.png', // credit apply
    name: 'Credit Apply',
  },
  {
    id: 7,
    image: 'https://cdn-icons-png.flaticon.com/512/483/483361.png', // bank account
    name: 'Open Account',
  },
  {
    id: 8,
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png', // demat / stocks
    name: 'Demat Account',
  },
  {
    id: 9,
    image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // tax
    name: 'Municipal Tax',
  },
  {
    id: 10,
    image: 'https://cdn-icons-png.flaticon.com/512/728/728093.png', // water bill
    name: 'Water Bill',
  },
  {
    id: 11,
    image: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png', // wifi
    name: 'Broadband',
  },
  {
    id: 12,
    image: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png', // tv
    name: 'Cable TV',
  },
  {
    id: 13,
    image: 'https://cdn-icons-png.flaticon.com/512/891/891462.png', // EMI
    name: 'EMI',
  },
  {
    id: 14,
    image: 'https://cdn-icons-png.flaticon.com/512/3103/3103446.png', // electricity
    name: 'Electricity',
  },
  {
    id: 15,
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png', // gas
    name: 'Gas',
  },
  {
    id: 16,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', // PAN
    name: 'Pan',
  },
  {
    id: 17,
    image: 'https://cdn-icons-png.flaticon.com/512/2991/2991108.png', // print
    name: 'Print Gov ID',
  },
  {
    id: 18,
    image: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png', // edit
    name: 'Aadhar Correction',
  },
  {
    id: 19,
    image: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png', // others
    name: 'Others',
  },
];

  
  return (
    <View style={
      styles.component
    }>
      <Header/>
     <ScrollView>
     <Hero/>
     <Card data={data}  title='Recharge'/>
     <Card data={data1}  title='Bill Payments'/></ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
component:{
  marginTop:34,
}
})