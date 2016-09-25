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
	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center',
	},
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
});

export default App;
