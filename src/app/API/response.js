import axios from "axios";
const URL = "https://e-commerce-backend-eosin-nine.vercel.app";


export const AddProduct = async (route, data) => {
  const config = {
    url: URL + route,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data: data,
  };
  try {
    const res = await axios.request(config);
    // console.log("res",res)
    return res.data

  } catch(err) {
    return err.response.data
  }
}

export const AddCategory = async (route, data) => {
  const config = {
    url: URL + route,
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const res = await axios.request(config);
    // console.log("res",res)
    return res.data

  } catch(err) {
    return err.response.data
  }
}


export const getAllProducts = async (route) => {
  const config = {
  url: URL + route,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  }
};
try {
  const res = await axios.request(config);
  return res.data
} catch(err) {
  return err.response.data
}
};
// https://e-commerce-backend-eosin-nine.vercel.app/product?category=games
// https://e-commerce-backend-eosin-nine.vercel.app/product?limit=5
export const getSingleProducts = async (route) => {
  const config = {
  url: URL + route,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  }
};
try {
  const res = await axios.request(config);
  return res.data
} catch(err) {
  return err.response.data
}
};
// update  product
export const EditProduct = async (route,  data) => { // Accept data as an argument
  const config = {
    url: URL + route, 
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`
    },
    data: JSON.stringify(data)
  };

  try {
    const res = await axios.request(config);
    return res.data;
  } catch (err) {
    return err.response ? err.response.data : { error: "Network error" };
  }
};


export const DeleteProduct = async (route) => {
  const config = {
  url: URL + route,
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  }
};
try {
  const res = await axios.request(config);
  return res.data
} catch(err) {
  return err.response.data
}
};