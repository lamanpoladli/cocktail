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




  


  export const postReservation = (payload) => {
    axios.post(`${BASE_URL}/reservation`, payload);
}

export const getAllReservations = async () => {
    let globalData;
    let URL;
      URL = BASE_URL+'/reservation';
    await axios.get(URL).then((res) => {
      globalData = res.data.data;
    });
    return globalData;
  };


  export const getAll = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/imagees`)
    .then((res)=>{
        globalData = res.data;
    })
    return globalData;
}
export const postImg = (payload)=>{
    axios.post(`${BASE_URL}/imagees`,payload);
}
export const deleteImg = (id)=>{
  axios.delete(`${BASE_URL}/imagees/${id}`);
}