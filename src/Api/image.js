import axios from 'axios';
import Config from '@Config/default';
const {key} = Config;
const BASE_PATH = 'https://api.unsplash.com/'
export const SearchQuery = async (
  query,
  page,
  per_page = 18,
  order = 'relevant',
) => {
  const uri = `${BASE_PATH}/search/photos?client_id=${key}&query=${query}&page=${page}&per_page=${per_page}&order_by=${order}$`;
  return axios.get(uri).then(res => res.data);
};

