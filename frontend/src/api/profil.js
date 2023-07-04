import {BASE_URL} from "./base_url"
import axios from "axios"



// Profil-----------------------------------------------------------------------------------------
export const getAllProfil = async () => {
  let globalData;
  await axios.get(`${BASE_URL}/profil`)
      .then((res) => {
          globalData = res.data.data;
      })
  return globalData;
}
export const editProfil = (id, payload) => {
  axios.put(`${BASE_URL}/profil/${id}`, payload);
}
