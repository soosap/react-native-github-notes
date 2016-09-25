import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet } from 'react-native';
import App from './src/App';

class GithubNotes extends Component {
	render() {
		return (
			<NavigatorIOS
				initialRoute={{
					title: 'Github Notes',
					component: App
				}}
				style={styles.container}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111111',
	},
});

AppRegistry.registerComponent('GithubNotes', () => GithubNotes);
