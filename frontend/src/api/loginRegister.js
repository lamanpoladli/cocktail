import {BASE_URL} from "./base_url"
import axios from "axios"


//Login Register--------------------------------------------------------------------------

//register
export const signUp = (payload)=>{
  axios.post(`${BASE_URL}/register`,payload)
}

//login
export const signIn = async(payload)=>{
  const response =  await axios.post(`${BASE_URL}/login`,payload);
  return response.data;
}
