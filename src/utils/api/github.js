import axios from 'axios';

export default {
	getBio(username) {
		const query = username.toLowerCase().trim();
		return axios.get(`https://api.github.com/users/${query}`);
	},
	getRepos(username) {
		const query = username.toLowerCase().trim();
		return axios.get(`https://api.github.com/users/${query}/repos`);
	},
};
