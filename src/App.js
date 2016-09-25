import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SearchForm from './components/SearchForm';

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SearchForm />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#48bbec',
	},
});

export default App;
