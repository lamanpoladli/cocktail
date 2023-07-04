import {BASE_URL} from "./base_url"
import axios from "axios"


// Footer-----------------------------------------------------------------------------------------
export const getAllFooter = async () => {
  let globalData;
  await axios.get(`${BASE_URL}/footer`)
      .then((res) => {
          globalData = res.data;
      })
  return globalData;
}
export const getFooterByID = async (id) => {
  let globalData;
  await axios.get(`${BASE_URL}/footer/${id}`).then((res) => {
    globalData = res.data;
  });
  return globalData;
};
export const postFooter =  (payload)=>{
  axios.post(`${BASE_URL}/footer`,payload);
}
export const editFooter = (id, payload) => {
  axios.put(`${BASE_URL}/footer/${id}`, payload);
}
export const deleteFooterByID = async(id)=>{
  let deleteFooter;
  await axios.delete(`${BASE_URL}/footer/${id}`)
  .then(res=>{
    deleteFooter = res.data;
  })
  return deleteFooter;
}