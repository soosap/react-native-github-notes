import React, { Component, PropTypes } from 'react';
import { Text, View, ListView, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

import { Badge, Separator } from './common';
import githubAPI from '../utils/api/github';

class Notes extends Component {
	static propTypes = {
		userInfo: PropTypes.object.isRequired,
		notes: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
		this.state = {
			dataSource: this.ds.cloneWithRows({}),
			note: '',
			error: '',
		};
	}

	componentDidMount() {
		// retrieveData
		firebase.database().ref(`notes/${this.props.userInfo.login}`).on('value', snapshot => {
			this.setState({ dataSource: this.ds.cloneWithRows(snapshot.val() || {}) });
		});
	}

	handleSubmit = () => {
		const { note } = this.state;
		this.setState({ note: '' });

		githubAPI.addNote(this.props.userInfo.login, note).catch(error => {
			console.log('error: ', error);
			this.setState({ error });
		});
	}

	renderFooter = () => (
		<View style={styles.footer}>
			<TextInput
				style={styles.searchInput}
				value={this.state.note}
				onChangeText={note => this.setState({ note })}
				placeholder="New note"
			/>
			<TouchableHighlight
				style={styles.button}
				underlayColor="#88D4F5"
				onPress={this.handleSubmit}
			>
				<Text style={styles.buttonText}>Submit</Text>
			</TouchableHighlight>
		</View>
	);

	renderRow = (rowData) => (
		<View>
			<View style={styles.row}>
				<Text>{rowData.body}</Text>
			</View>
			<Separator />
		</View>
	);

	render() {
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderRow}
					renderHeader={() => <Badge userInfo={this.props.userInfo} />}
					enableEmptySections
				/>
				{this.renderFooter()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
	},
	button: {
		height: 60,
		backgroundColor: '#48BBEC',
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchInput: {
		height: 60,
		padding: 10,
		fontSize: 18,
		color: '#111',
		flex: 10,
	},
	row: {
		padding: 10,
	},
	footer: {
		backgroundColor: '#E3E3E3',
		alignItems: 'center',
		flexDirection: 'row',
	},
});

export default Notes;
