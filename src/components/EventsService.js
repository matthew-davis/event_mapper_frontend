import axios from 'axios';
const API_URL = 'http://178.62.46.131:8000';

export default class EventsService{
    getEvents() {
        const url = `${API_URL}/api/events/`;
        return axios.get(url).then(response => response.data);
    }
    getEventsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getEvent(pk) {
        const url = `${API_URL}/api/events/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteEvent(eventobj){
        const url = `${API_URL}/api/events/${eventobj.pk}`;
        return axios.delete(url);
    }
    createEvent(eventobj){
        const url = `${API_URL}/api/events/`;
        return axios.post(url,eventobj);
    }
    updateEvent(eventobj){
        const url = `${API_URL}/api/events/${eventobj.pk}`;
        return axios.put(url,eventobj);
    }
    getEventMap(date) {
      const url = `${API_URL}/api/events/${date}`;
      return axios.get(url).then(response => response.data);
    }
}
