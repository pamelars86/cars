import axios from 'axios';


// this methods is going to create a instance of axios client
// with a couple of default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 
            'Client-ID 3d58a63aa5097e6c431bacbb34c0266cb8264d77dd283fe3cb83f248e864f4dc'
    }
});