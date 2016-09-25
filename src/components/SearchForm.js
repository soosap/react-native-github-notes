import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

import githubAPI from '../utils/api/github';
import Dashboard from './Dashboard';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isLoading: false,
      hasError: false,
    };
  }

  handleSubmit = () => {
    // Update ActivityIndicatorIOS
    this.setState({ isLoading: true });

    // Fetch data from Github using the GithubAPI
    // Implementation detail abstracted along the lines of adapter pattern
    githubAPI.getBio(this.props.username).then(res => {
      if (res.message === 'Not Found') {
        this.setState({ error: 'User not found.', isLoading: false });
      } else {
        // Reroute to the next screen passing the obtained Github data
        // This is only possible because we are making use of <NavigatorIOS />
        this.props.navigator.push({
          title: res.name || 'Select an option',
          component: Dashboard,
          passProps: { userInfo: res }
        });

        this.setState({ error: '', isLoading: false, username: '' });
      }
    });
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
