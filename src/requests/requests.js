import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dTyEaXGHVazR1klH00eg_ZfCnFOP8etGZga7Yu91Avk'
    }
})

/*
const getPics = ()*/
