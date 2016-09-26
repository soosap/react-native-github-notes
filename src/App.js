import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchForm from './components/SearchForm';

class App extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired,
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
