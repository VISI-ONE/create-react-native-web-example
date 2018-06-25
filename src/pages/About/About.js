import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import logo from '../../logo.png';
class About extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image source={logo} style={styles.logo}/>
        <Text style={styles.title}>About Page</Text>
        <Text>just another example route</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default About;
