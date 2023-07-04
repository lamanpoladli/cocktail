import {BASE_URL} from "./base_url"
import axios from "axios"



//image----------------------------------------------------------------
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
