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


//CATEGORY AND PRODUCT--------------------------------------------------
//get all Categories
export const getAllCategories = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL+'/categories';
  }
  else{
    URL = BASE_URL+'/categories'+`?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};
//get Category by ID
export const getCategoryByID = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/categories/${ID}`).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

//delete Category by  ID
export const deleteCategorytByID = async (ID) => {
  let deletedCategory;
  await axios.delete(`${BASE_URL}/categories/${ID}`).then((res) => {
    deletedCategory = res.data.data;
  });

  return deletedCategory;
};
//post category
export const postCategory = (payload) => {
  axios.post(`${BASE_URL}/categories`, payload);
};
//edit category
export const editCategory = (id,payload)=>{
  axios.put(`${BASE_URL}/categories/${id}`,payload);
}


//get All products
export const getCategoryProducts = async(id) => {
  let globalData;
  await axios.get(`${BASE_URL}/products/${id}`)
  .then(res=>{
    globalData = res.data;
  })
  return globalData
}
export const getAllProducts = async() => {
  let globalData;
  await axios.get(`${BASE_URL}/products`)
  .then(res=>{
    globalData = res.data;
  })
  return globalData
}
export const deleteProductByID = async(id)=>{
  let deletedProduct;
  await axios.delete(`${BASE_URL}/products/${id}`)
  .then(res=>{
    deletedProduct = res.data.data;
  })
  return deletedProduct;
}
export const postProduct =  (payload)=>{
  axios.post(`${BASE_URL}/products`,payload);
}



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


// Footer-----------------------------------------------------------------------------------------
export const getAllFooter = async () => {
  let globalData;
  await axios.get(`${BASE_URL}/footer`)
      .then((res) => {
          globalData = res.data.data;
      })
  return globalData;
}
export const editFooter = (id, payload) => {
  axios.put(`${BASE_URL}/footer/${id}`, payload);
}

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