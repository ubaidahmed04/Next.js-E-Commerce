import axios from "axios";
const URL = "https://nubit-blog.vercel.app";


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
    console.log("res",res)
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