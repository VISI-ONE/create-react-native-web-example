import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
} from 'react-native';
import Button from '../../components/Button';
import { isDesktop } from '../../helpers';

const extractValueFromEvent = (event) => event.target ? event.target.value : event;
const extractKeyFromEvent = (event) => event.nativeEvent ? event.nativeEvent.key : event.key;

class Contact extends Component {
  state = {
    username: '',
    message: '',
  }

  onUsernameChange = (event) => {
    this.setState({ username: extractValueFromEvent(event) });
  }
  onMessageChange = (event) => {
    this.setState({ message: extractValueFromEvent(event) });
  }

  submit = () => {
    const { username, message } = this.state;

    alert(`| username: ${username} | message: ${message} |`);
  }

  handleKeyDown = (event) => {
    if (extractKeyFromEvent(event) === 'Enter') {
        this.submit();
    }
  }

  focusOnMessage = () => this.messageInput && this.messageInput.focus();

  render() {
    return (
      <ScrollView  style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Contact Page</Text>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            returnKeyType="go"
            onChangeText={this.onUsernameChange}
            placeholder="John Doe"
            style={styles.textinput}
            onKeyPress={this.handleKeyDown}
            onSubmitEditing={this.focusOnMessage}
          />
          <Text style={styles.label}>Message:</Text>
          <TextInput
            ref={ref => this.messageInput = ref}
            onChangeText={this.onMessageChange}
            placeholder="your opinion? ..."
            style={styles.textinput}
            onKeyPress={this.handleKeyDown}
            returnKeyType="go"
            onSubmitEditing={this.submit}
          />
          <Button onClick={this.submit}>Send</Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  content: {
    position: 'relative',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    color: '#000',
    margin: 10,
    alignSelf: 'flex-start',
  },
  textinput: {
    borderRadius: 3,
    backgroundColor: '#fff',
    borderWidth: 1,
    color: '#000',
    padding: 5,
    margin: 10,
    width: isDesktop ? 350 : '80%',
  },
});

export default Contact;
