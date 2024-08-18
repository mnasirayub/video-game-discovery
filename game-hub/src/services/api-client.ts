/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

const apiKey = '6c73fbdb02ec4ff38211557a2bd8ed3d';


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: apiKey
    }
})