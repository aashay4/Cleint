import axios from 'axios';
const BASE_URL = 'http://localhost:5000';
export function getNotes() {
        return axios.get(`${BASE_URL}/api/notes/list`)
                .then(response => response.data);
}
export function deleteNote(id){
        return axios.post(`${BASE_URL}/api/notes/delete/${id}`)
                .then(response => response.data)
                .catch(err => Promise.reject(err.message));
}
export function createNote(formData) {
        return axios.post(`${BASE_URL}/api/note/create`,
       formData,
        {
          headers: {
      'Content-Type': 'multipart/form-data'
        }
      }
        )      .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
export function updateNote(data, id) {
        return axios.post(`${BASE_URL}/api/notes/update/${id}`, { data })
                .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
