import axios from "axios";

// Base da url https://api.themoviedb.org/3/
// URL DA API /movie/now_playing?api_key=201d3383b5e04c48888fc5214c6a98b1&languege=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;