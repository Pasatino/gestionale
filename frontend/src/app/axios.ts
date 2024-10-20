import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000/api";

// Definizione dell'interfaccia per il tipo Prodotto
export interface TipoProdotto {
  id: number;
  tipo: string;
}

// Definizione dell'interfaccia per il Prodotto
export interface Prodotto {
  id?: number;
  nome: string;
  descrizione: string;
  data_inserimento: string;
  tipo_prodotto: TipoProdotto;
}

// Definizione dell'interfaccia per il tipo Utente
export interface Utente {
  id: number;
  nome: string;
  email: string;
}

/* Funzioni Prodotti */

export const getProducts = async (): Promise<Prodotto[]> => {
  const response: AxiosResponse<Prodotto[]> = await axios.get(
    `${API_URL}/prodottos`
  );
  return response.data;
};

export const getProduct = async (id: number): Promise<Prodotto> => {
  const response: AxiosResponse<Prodotto> = await axios.get(
    `${API_URL}/prodottos/${id}`
  );
  return response.data;
};

/* export const createProduct = async (
  productData: Omit<Prodotto, "id">
): Promise<Prodotto> => {
  const response: AxiosResponse<Prodotto> = await axios.post(
    `${API_URL}/prodottos`,
    productData
  );
  return response.data;
}; */

export const createProduct = async (
  productData: Omit<Prodotto, "id" | "tipo_prodotto"> & { tipo_prodotto_id: number }
): Promise<Prodotto> => {
  const response: AxiosResponse<Prodotto> = await axios.post(
    `${API_URL}/prodottos`,
    productData
  );
  return response.data;
};


export const updateProduct = async (
  id: number,
  productData: Partial<Prodotto>
): Promise<Prodotto> => {
  const response: AxiosResponse<Prodotto> = await axios.put(
    `${API_URL}/prodottos/${id}`,
    productData
  );
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/prodottos/${id}`);
};


/* Funzioni Utenti */

export const getUtenti = async (): Promise<Utente[]> => {
  const response: AxiosResponse<Utente[]> = await axios.get(
    `${API_URL}/utentes`
  );
  return response.data;
};

export const getUtente = async (id: number): Promise<Utente> => {
  const response: AxiosResponse<Utente> = await axios.get(
    `${API_URL}/utentes/${id}`
  );
  return response.data;
};

export const createUtente = async (
  utenteData: Omit<Utente, "id">
): Promise<Utente> => {
  const response: AxiosResponse<Utente> = await axios.post(
    `${API_URL}/utentes`,
    utenteData
  );
  return response.data;
};

export const updateUtente = async (
  id: number,
  utenteData: Partial<Utente>
): Promise<Utente> => {
  const response: AxiosResponse<Utente> = await axios.put(
    `${API_URL}/utentes/${id}`,
    utenteData
  );
  return response.data;
};

export const deleteUtente = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/utentes/${id}`);
};
