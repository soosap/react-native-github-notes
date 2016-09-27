import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = () => (
	<View style={styles.separator} />
);

const styles = StyleSheet.create({
	separator: {
		height: 1,
		backgroundColor: '#E4E4E4',
		marginLeft: 10,
	},
});
