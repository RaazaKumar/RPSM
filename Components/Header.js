import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.header}>
        
        {/* Left Profile */}
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            }}
            style={styles.profileImg}
          />
        </TouchableOpacity>

        {/* Center Title */}
        <Text style={styles.title}>Home</Text>

        {/* Right Menu */}
        <TouchableOpacity style={styles.menuBtn} activeOpacity={0.7}>
          <Text style={styles.menuText}>⋮</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
  },

  header: {
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#232a51',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',

    elevation: 3, // Android
  },

  profileImg: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 0.5,
  },

  menuBtn: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#f2f2f2',

    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    fontSize: 20,
    color: '#000000',
    marginTop: -2, 
  },
});