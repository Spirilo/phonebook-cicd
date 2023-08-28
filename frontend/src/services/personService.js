import axios from "axios";

const baseUrl = '/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(repsonse => repsonse.data)
}

const create = person => {
  const request = axios.post(baseUrl, person)
  return request.then(response => response.data)
}

const update = (id, person) => {
  const request = axios.put(`${baseUrl}/${id}`, person)
  return request.then(response => response.data)
}

const dlt = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(x => x.data)
}

// eslint-disable-next-line
export default { getAll, create, update, dlt}