import axios from 'axios'
const url = "https://my-json-server.typicode.com/gingerOk/zoo-project"

// export default api = {
//     animals: {
//         fetchAll: () => axios.get(url).then(res => res.data.animals),
//         create: animal =>
//         axios.post(url, {animal}).then(res => res.data.animal),
//       update: animal =>
//         axios
//           .put(`${url}${animal.id}`, {animal})
//           .then(res => res.data.animal),
//       delete: animal => axios.delete(`${url}${animal.id}`),
//     },
//     users: "",
// }


export const animals = {
    fetchAll: () => axios.get(`${url}/animals`).then(res => res.data),
    create: animal =>
    axios.post(url, {animal}).then(res => res.data.animal),
}