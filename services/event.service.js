import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getEvents() {
        return axios.get(`${apiUrl}/events?populate=*`).then((res) => res.data);
    },

    getEvent(id) {
        return fetch(`${apiUrl}/events/${id}?populate=*`).then((res) => res.json());
    },
}