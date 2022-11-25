import axios from 'axios';
import {baseURL} from "../constant/constant"

const instance = axios.create({
    baseURL: baseURL,
});

export default instance