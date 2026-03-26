import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = () => {
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
      name: 'Electricity',
    },
    {
      id: 4,
      image: 'https://cdn-icons-png.flaticon.com/512/3059/3059518.png',
      name: 'Water Bill',
    },
    // {
    //   id: 5,
    //   image: 'https://cdn-icons-png.flaticon.com/512/483/483947.png',
    //   name: 'Gas',
    // },
    // {
    //   id: 6,
    //   image: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    //   name: 'Broadband',
    // },
    // {
    //   id: 7,
    //   image: 'https://cdn-icons-png.flaticon.com/512/891/891419.png',
    //   name: 'Insurance',
    // },
    // {
    //   id: 8,
    //   image: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
    //   name: 'Loan EMI',
    // },
    // {
    //   id: 9,
    //   image: 'https://cdn-icons-png.flaticon.com/512/2838/2838912.png',
    //   name: 'FASTag',
    // },
    // {
    //   id: 10,
    //   image: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
    //   name: 'Credit Card',
    // },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Recharge</Text>
      <View style={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor:'#f1a6a6'
    borderWidth: 1,
    marginTop: -14,
    marginHorizontal:14,
    backgroundColor:'#fff',
    borderRadius: 20,
    borderWidth:0
  },
  title: {
    marginLeft: 16,
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    // backgroundColor:'red',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 16,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 5,
  },
  card: {
    alignItems: 'center',
    // backgroundColor: '#9c9a9a',
    width: '23%',
    padding: 12,
    borderRadius: 12,
    // elevation: 3,
    // shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 2,
  },
  text: {
    fontSize: 10,
    fontWeight: '800',
  },
});
