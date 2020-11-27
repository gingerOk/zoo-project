import axios from 'axios'
const url = "http://localhost:8000"

export const animals = {
    fetchAll: () => axios.get(`${url}/animals`).then(res => res.data),
    create: animal => axios.post(`${url}/animals`, animal).then(res => res.data),
    update: animal => axios.put(`${url}/animals/${animal.id}`, {animal}).then(res => res.data),
    delete: animal => axios.delete(`${url}/animals/${animal.id}`),
}

export const users = {
    create: user => axios.post(`${url}/auth/register`, user),
    login: credentials =>
      axios.post(`${url}/auth/login`, credentials).then(res => res.data.access_token)
}

export const setAuthorizationHeader = (token = null) => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common.Authorization;
      }
}
