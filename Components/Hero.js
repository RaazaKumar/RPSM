import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Hero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          }}
          style={styles.profileImg}
        />

        <View>
          <Text style={styles.heroText1}>
            Save On Every Transaction
          </Text>
          <Text style={styles.heroText2}>
            Lifetime Commission
          </Text>
        </View>

      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#858585',
    width: '100%',
  },

  innerContainer: {
    padding: 20,
    alignItems: 'center',
  },

  profileImg: {
    width: 390,
    height: 220,
    resizeMode: 'contain',
    backgroundColor:'#aeaeae',
    marginBottom: 15,
  },

  heroText1: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
    marginVertical:8
  },

  heroText2: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff200',
    marginTop: 5,
    borderWidth:1,
    borderColor:'#fff200',
    padding:4,
    borderRadius:50
  },
});