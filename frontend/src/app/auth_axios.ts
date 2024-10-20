import axios from "axios";

const API_URL = 'http://localhost:3000/api';

export const login = async (username:string, password:string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        if (response.data.token){
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        console.error('Errore durante il login:', error);
    }
};

export const logout = () => {
    localStorage.removeItem('user');
};

//Questa funzione serve a recuperare le informazioni dell'utente attualmente autenticato dal localStorage del browser.
export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
};

// Configuro Axios per includere il token in ogni richiesta
axios.interceptors.request.use(
    (config) => {const user = getCurrentUser();
    if (user && user.token) {
    config.headers['Authorization'] = 'Bearer ' + user.token;
    }
    return config;
    },
    (error) => {
        return Promise.reject(error);
    });