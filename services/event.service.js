import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getEvents() {
        return axios.get(`${apiUrl}/events?populate=*`).then((res) => res.data);
    },

    getEvent(id) {
        return axios.get(`${apiUrl}/events/${id}`).then((res) => res.json());
    },

    addEvent(payload){
        return fetch (`${apiUrl}/events`,
        {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify(payload), 
     })
        .then((res) => res.data)
    }
}
