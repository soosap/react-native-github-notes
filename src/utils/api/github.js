import axios from 'axios';
import firebase from 'firebase';

export default {
	getBio(username) {
		const query = username.toLowerCase().trim();
		return axios.get(`https://api.github.com/users/${query}`);
	},
	getRepos(username) {
		const query = username.toLowerCase().trim();
		return axios.get(`https://api.github.com/users/${query}/repos`);
	},
	getNotes(username) {
		const usernameX = username.toLowerCase().trim();
		return firebase.database().ref(`/notes/${usernameX}`).once('value');
	},
	addNote(username, note) {
		const usernameX = username.toLowerCase().trim();
		const newPostKey = firebase.database().ref().child('notes').push().key;

		const updates = {};
		updates[`/notes/${newPostKey}`] = { body: note };
		updates[`/notes/${usernameX}/${newPostKey}`] = { body: note };

		return firebase.database().ref().update(updates);
	}
};
