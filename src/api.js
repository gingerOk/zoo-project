import axios from 'axios'
const url = "https://my-json-server.typicode.com/gingerOk/zoo-project"

export const animals = {
    fetchAll: () => axios.get(`${url}/animals`).then(res => res.data),
    create: animal =>
    axios.post(url, {animal}).then(res => res.data.animal),
    update: animal => axios.post(`${url}/animals${animal.id}`, {animal}).then(res => res.data),
    delete: animal => axios.delete(`${url}/animals${animal.id}`),
}