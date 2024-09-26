import axios from 'axios'
const instance = axios.create({
    // baseURL:"http://localhost:5000/"
    // deployed link on render
    baseURL:"https://amazone-clone-1.onrender.com/"
});

export { instance};