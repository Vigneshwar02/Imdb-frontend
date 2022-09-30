import axios from "axios";

const baseurl = "api/movie"

const getAll=()=>{
    const request = axios.get(baseurl)
    return request.then(response=>response.data)
}

const createEntry=(obj)=>{
    return axios.post(baseurl,obj).then(response=>console.log(response.data))
}

const updateEntry = (id,obj)=>{
    return axios.put(baseurl+`/${id}`,obj).then(response=>response.data)
}

const deleteEntry = (id)=>{
    return axios.delete(baseurl+`/${id}`)
}
export default {
    getAll,
    createEntry,
    updateEntry,
    deleteEntry
}