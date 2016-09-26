import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

class Dashboard extends Component {
	render() {
		console.log('this.props.userInfo: ', this.props.userInfo);
		return (
			<View style={styles.container}>
				<Image source={{ uri: this.props.userInfo.avatar_url }} style={styles.image} />
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
