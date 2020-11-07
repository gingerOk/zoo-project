import axios from 'axios'
const url = "https://my-json-server.typicode.com/gingerOk/zoo-project"

export const animals = {
    fetchAll: () => axios.get(`http://localhost:3001/animals`).then(res => res.data),
    create: animal => axios.post(`http://localhost:3001/animals`, {
       name: animal.name,
       imageLink: animal.imageLink,
       fact: animal.fact
}).then(res => res.data),
    update: animal => axios.post(`http://localhost:3001/animals/${animal.id}`, {animal}).then(res => res.data),
    delete: animal => axios.delete(`http://localhost:3001/animals/${animal.id}`),
}