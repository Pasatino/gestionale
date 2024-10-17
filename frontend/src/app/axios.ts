import axios from "axios";

const api_rails = axios.create({
    baseURL: 'http:localhost:3000', //Questo è l'url del backend rails
})

/* Funzione per ottenere tutti i prodotti */
export const mostraProdotti = async () => {
    const response = await api_rails.get('/prodottos')
}

/* Funzione per mostrare un singolo prodotto */
export const mostraProdotto = async (id:number) => {
    return await api_rails.get('/prodottos/id')
}

/* Funzione per aggiungere un nuovo prodotto */
export const creaProdotto = async (data: any) => {
    return await api_rails.post('/prodottos', data)
}

/* Funzione per aggiornare un prodotto */
export const modificaProdotto = async (id:number, data:any) => {
    return await api_rails.put('/prodottos/id', data)
}

/* Funzione per eliminare un prodotto */
export const eliminaProdotto = async (id:number) => {
    return await api_rails.delete('/prodottos/id')
}

