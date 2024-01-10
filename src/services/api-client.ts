import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ff3609d369c7465da1e7750ef5d6fa62'
    }
})