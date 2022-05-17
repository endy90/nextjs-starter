import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getUsers() {
        return axios.get(`${apiUrl}/users`).then((res) => res.data);
    },

    
    register(payload) {
		return fetch(`${apiUrl}/auth/local/register`, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(payload),
		}).then((res) => res.json());
	},

	
	login(payload) {
		return fetch(`${apiUrl}/auth/local/`, {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(payload),
		}).then((res) => res.json());
	},
	getMe(jwt) {
		return fetch(`${apiUrl}/users/me`, {
			headers: {
                "Authorization" : `Bearer ${jwt}`
			},
		}).then((res) => res.json());
	},
}