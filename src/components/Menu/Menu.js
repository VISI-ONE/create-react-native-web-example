import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import GestureRecognizer from 'react-native-swipe-gestures';
import { shadow, isAndroid } from '../../helpers';
import Link from '../Link';

const gestureConfig = {
  velocityThreshold: 0.5,
  directionalOffsetThreshold: isAndroid ? 900 : 90,
};
const menuWidth = 320;
const visibleMenuOffset = 40;
const closedMenuMargin = (menuWidth - visibleMenuOffset) * -1;

class Menu extends Component {
  state = {
    isMenuOpen: false,
    menuOffset: new Animated.Value(closedMenuMargin),
  }

  toggleMenu = () => {
    this.setState(state => {
      const isOpen = state.menuOffset._value === 0;
      Animated.timing(
        state.menuOffset,
        {
          toValue: isOpen ? closedMenuMargin : 0,
          duration: 150,
          easing: Easing.linear
        }
      ).start()
      return { isMenuOpen: !isOpen };
    });
  }

  render() {
    return (
      <Animated.View
        style={[styles.menu, { right: this.state.menuOffset }]}
      >
        <GestureRecognizer
          onSwipeRight={this.toggleMenu}
          onSwipeLeft={this.toggleMenu}
          config={gestureConfig}
          style={{ flex: 1 }}
        >
          <View style={styles.content}>
            <TouchableHighlight
              onPress={this.toggleMenu}
              style={styles.menuButton}
              underlayColor={'#DDDDDD'}
            >
              <Text style={styles.buttonText}><Icon name="menu" size={30} color="#333333" /></Text>
            </TouchableHighlight>
            <View style={styles.links}>
              <Link className="nav-link" onClick={this.toggleMenu} to="/" style={styles.link}>Home</Link>
              <Link className="nav-link" onClick={this.toggleMenu} to="/about" style={styles.link}>About</Link>
              <Link className="nav-link" onClick={this.toggleMenu} to="/contact" style={styles.link}>Contact</Link>
            </View>
          </View>
        </GestureRecognizer>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    paddingLeft: 5,
    flexDirection: 'row',
    width: menuWidth,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
  },
  links: {
    backgroundColor: '#DDDDDD',
    ...shadow,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    width: menuWidth - visibleMenuOffset,
    overflow: 'hidden',
    paddingTop: 10,
  },
  menuButton: {
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginTop: 5,
    padding: 0,
  },
  buttonText: {
    color: '#333333',
    fontWeight: 'bold',
  },
  link: {
    display: 'flex',
    alignSelf: 'flex-start',
    color: '#1B95E0',
    paddingLeft: 10,
    borderRadius: 3,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    width: '100%',
  },
});

export default Menu;
