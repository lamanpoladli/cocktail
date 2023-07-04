import {BASE_URL} from "./base_url"
import axios from "axios"


// Team-----------------------------------------------------------------------------------------
export const getAllTeam = async () => {
  let globalData;
  await axios.get(`${BASE_URL}/team`)
      .then((res) => {
          globalData = res.data.data;
      })
  return globalData;
}
export const editTeam = (id, payload) => {
  axios.put(`${BASE_URL}/team/${id}`, payload);
}