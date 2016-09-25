import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isLoading: false,
      hasError: false,
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.search}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  search: {
    height: 50,
    padding: 4,
    paddingLeft: 10,
    fontSize: 23,
    fontWeight: '600',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    color: 'white',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
});

export default SearchForm;
