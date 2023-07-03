import { BASE_URL } from "./base_url";
import axios from "axios";

export const getAllAbouts = async () => {
  let globalData;
  await axios.get(`${BASE_URL}/about`).then((res) => {
    globalData = res.data;
  });
  return globalData;
};
export const getAboutByID = async (id) => {
  let globalData;
  await axios.get(`${BASE_URL}/about/${id}`).then((res) => {
    globalData = res.data;
  });
  return globalData;
};
export const deleteAboutByID = async (id) => {
  let deletedProduct;
  await axios.delete(`${BASE_URL}/about/${id}`).then((res) => {
    deletedProduct = res.data;
  });
  return deletedProduct;
};
export const postAbout = (payload) => {
  axios.post(`${BASE_URL}/about`, payload);
};
//edit about
export const editAbout = (id, payload) => {
  axios.put(`${BASE_URL}/about/${id}`, payload);
};
