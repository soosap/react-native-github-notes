import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import SearchForm from './components/SearchForm';

class App extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired,
	}
	
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIXaSyCxtXPd_WOoX6VAGxow4lIK-bsZPX5vXxN8QXd',
			authDomain: 'react-native-fbauth.firebaseapp.com',
			databaseURL: 'https://react-native-fbauth.firebaseio.com',
			storageBucket: 'react-native-fbauth.appspot.com',
			messagingSenderId: '345333254237'
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchForm navigator={this.props.navigator} />
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
