import axios from "axios";

const KEY = '35900123-c9c0239e27eb1dd1d96f05647';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const FetchImages = async (query, page = 1) => {
    const params = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });

  const response = await axios.get('/', { params });
 

   if (response.status !== 200) {
    throw new Error(response.status);
  };

  console.log(response.data);
 
  return response.data
  
}