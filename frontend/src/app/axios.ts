import axios from "axios";

const api_rails = axios.create({
    baseURL: 'http:localhost:3000', //Questo è l'url del backend rails
})

/* Funzione per ottenere tutti i prodotti */
export const getProdotti = async () => {
    return await api_rails.get('/prodottos')
}

/* Funzione per mostrare un singolo prodotto */
export const getProdotto = async (id:number) => {
    return await api_rails.get('/prodottos/id')
}

/* Funzione per aggiungere un nuovo prodotto */
export const createProdotto = async (data: any) => {
    return await api_rails.post('/prodottos', data)
}

/* Funzione per aggiornare un prodotto */
export const updateProdotto = async (id:number, data:any) => {
    return await api_rails.put('/prodottos/id', data)
}

/* Funzione per eliminare un prodotto */
export const deleteProdotto = async (id:number) => {
    return await api_rails.delete('/prodottos/id')
}

