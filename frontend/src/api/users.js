import {BASE_URL} from "./base_url"
import axios from "axios"


//users
export const getUsers = async(token)=>{
  let users;
  await axios.get(`${BASE_URL}/users`,{
      headers: {
          'x-access-token': token
      }
  }).then((res)=>{
      users = res.data;
  })
  return users;
}
