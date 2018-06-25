import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import Button from '../../components/Button';
import logo from '../../logo.png';

class Home extends Component {
  state = {
    spinValue: new Animated.Value(0),
  }

  onClick = () => {
    const wasRotated = this.state.spinValue._value === 1;
    Animated.timing(
      this.state.spinValue,
      {
        toValue: wasRotated ? 0 : 1,
        duration: 250,
        easing: Easing.linear
      }
    ).start()
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <Animated.Image source={logo} style={[styles.logo, { transform: [{rotate: spin}] }]}/>
        <Text style={styles.title}>Create React Native Web App</Text>
        <Text>Open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        {Platform.OS !== 'web' && <Text>Shake your phone to open the developer menu.</Text>}
        <Button onClick={this.onClick}>Rotate Logo</Button>
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

export default Home;
