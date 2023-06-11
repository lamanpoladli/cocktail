import {BASE_URL} from "./base_url"
import axios from "axios"


export const getAllImages = async ()=>{
    let globaldata
    await axios.get(`${BASE_URL}/images`).then((res)=>{
        globaldata = res.data
    })
    return globaldata
}
export const getImageById = async (id)=>{
    let globaldata
    await axios.get(`${BASE_URL}/images/${id}`).then((res)=>{
        globaldata = res.data
    })
    return globaldata
}


export const postImage = (payload) => {
  axios.post(`${BASE_URL}/images`, payload);
};

export const editImage = (id,payload)=>{
    axios.put(`${BASE_URL}/images/${id}`,payload);
  }
