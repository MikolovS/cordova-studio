import axios from 'axios';
import {API} from "./constants";

let Axios = axios.create({
  baseURL: API
});

export default Axios
