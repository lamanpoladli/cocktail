import {BASE_URL} from "./base_url"
import axios from "axios"


//RESERVATIONS---------------------------------------------------------
export const postReservation = (payload) => {
    axios.post(`${BASE_URL}/reservation`, payload);
}

export const editReservation = (id,payload) => {
  axios.put(`${BASE_URL}/reservation/${id}`, payload);
}

export const deleteReservation = (id) => {
  axios.delete(`${BASE_URL}/reservation/${id}`);
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
