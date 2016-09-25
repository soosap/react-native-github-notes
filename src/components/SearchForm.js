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
      </View>
    );
  }
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center',
		color: '#fff'
	},
	search: {
		height: 50,
		padding: 4,
		paddingLeft: 10,
		marginRight: 5,
		fontSize: 23,
		fontWeight: '600',
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 6,
		color: 'white',
	},
});

export default SearchForm;
