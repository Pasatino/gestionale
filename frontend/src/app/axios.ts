import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3000/api';

// Definizione dell'interfaccia per il tipo Prodotto
interface Prodotto {
  id: number;
  nome: string;
  descrizione: string;
  data_inserimento: string;
  tipo_prodotto_id: number;
  // Aggiungi altri campi se necessario
}

// Funzioni API tipizzate
export const getProducts = async (): Promise<Prodotto[]> => {
  const response: AxiosResponse<Prodotto[]> = await axios.get(`${API_URL}/prodottos`);
  return response.data;
};

export const getProduct = async (id: number): Promise<Prodotto> => {
  const response: AxiosResponse<Prodotto> = await axios.get(`${API_URL}/prodottos/${id}`);
  return response.data;
};

export const createProduct = async (productData: Omit<Prodotto, 'id'>): Promise<Prodotto> => {
  const response: AxiosResponse<Prodotto> = await axios.post(`${API_URL}/prodottos`, productData);
  return response.data;
};

export const updateProduct = async (id: number, productData: Partial<Prodotto>): Promise<Prodotto> => {
  const response: AxiosResponse<Prodotto> = await axios.put(`${API_URL}/prodottos/${id}`, productData);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/prodottos/${id}`);
};

