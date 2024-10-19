"use client";

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
        console.error("Errore nel recupero dei prodotti:", error);
      }
    };

    fetchProdotti();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="d-flex justify-content-center">
              <h1>Lista Prodotti</h1>
            </div>
          </div>
        </div>
        <div className="col-12">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrizione</th>
                <th scope="col">Data Inserimento</th>
                <th scope="col">Tipo Prodotto ID</th>
              </tr>
            </thead>
            <tbody>
              {prodotti.map((prodotto) => (
                <tr key={prodotto.id}>
                  <th scope="row">{prodotto.id}</th>
                  <td>{prodotto.nome}</td>
                  <td>{prodotto.descrizione}</td>
                  <td>
                    {new Date(prodotto.data_inserimento).toLocaleDateString()}
                  </td>
                  <td>{prodotto.tipo_prodotto_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProdottiPage;
