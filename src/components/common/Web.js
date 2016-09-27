import React, { PropTypes } from 'react';
import { View, WebView, StyleSheet } from 'react-native';

export const Web = ({ uri }) => (
	<View style={styles.container}>
		<WebView source={{ uri }} />
	</View>
);

Web.propTypes = {
	source: PropTypes.shape({
		uri: PropTypes.string.isRequired,
	}),
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6EF',
		flexDirection: 'column',
	},
});
