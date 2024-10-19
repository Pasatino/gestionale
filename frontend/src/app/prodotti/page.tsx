"use client"

import React, { useEffect, useState } from "react";
import { getProducts } from "../axios";

interface Prodotto {
  id: number;
  nome: string;
  descrizione: string;
  data_inserimento: string;
  tipo_prodotto_id: number;
}

const ProdottiPage = () => {
  const [prodotti, setProdotti] = useState<Prodotto[]>([]);

  useEffect(() => {
    const fetchProdotti = async () => {
      try {
        const data = await getProducts();
        setProdotti(data);
      } catch (error) {
        console.error('Errore nel recupero dei prodotti:', error);
      }
    };

    fetchProdotti();
  }, []);

  return (
    <div>
      <h1>Lista Prodotti</h1>
      <ul>
        {prodotti.map(prodotto => (
          <li key={prodotto.id}>
            <strong>{prodotto.nome}</strong> - {prodotto.descrizione}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdottiPage;
