import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = ({ data, title }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}> {title} </Text>
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
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 0,
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
    width: 'auto',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
