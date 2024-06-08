
import axios from "axios";
export interface FetchResponse<T> {
    count: number;
    results: T[];
  }


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e6f20a8dce9d44fab7d5dedd6c628efd'
    }
})