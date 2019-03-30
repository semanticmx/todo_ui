import axios from 'axios';

export class APIService{
  getTasks() {
    const url = `/api/tasks/`;
    return axios.get(url).then(response => response.data);
  }
}
