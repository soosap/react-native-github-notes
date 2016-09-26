import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Dashboard extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Dashboard</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1,
	},
	image: {
		height: 350,
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center',
	},
});

export default Dashboard;
