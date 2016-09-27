import React, { Component, PropTypes } from 'react';
import { Text, View, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';

import { Badge, Separator, Web } from './common';

class Repositories extends Component {
	static propTypes = {
		userInfo: PropTypes.object.isRequired,
		repos: PropTypes.array.isRequired,
	}

	openPage = (uri) => {
		this.props.navigator.push({
			component: Web,
			title: 'Web View',
			passProps: { uri },
		});
	}

	render() {
		const { repos } = this.props;
		console.log('this.props: ', this.props);

		const list = repos.map((repo, index) => {
			const desc = repo.description && <Text style={styles.description}>{repo.description}</Text>;
			return (
				<View key={index}>
					<View style={styles.row}>
						<TouchableHighlight
							onPress={this.openPage.bind(this, repo.html_url)}
							underlayColor="transparent"
						>
							<Text style={styles.name}>{repo.name}</Text>
						</TouchableHighlight>
						{desc}
					</View>
					<Separator />
				</View>
			);
		});

		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	row: {
		flexDirection: 'column',
		flex: 1,
		padding: 10,
	},
	name: {
		color: '#48BBEC',
		fontSize: 18,
		paddingBottom: 5,
	},
	description: {
		fontSize: 14,
		paddingBottom: 5,
	},
});

export default Repositories;
