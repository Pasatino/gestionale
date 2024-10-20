"use client";

import React, { useEffect, useState } from "react";
import { getProducts, createProduct } from "../axios";

import type { Prodotto , TipoProdotto} from "../axios";



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
      <h1 className="my-4">Lista Prodotti</h1>
      <div className="card-wrapper card-space">
        <div className="card card-bg">
          <div className="card-header">
            <h5 className="card-title">Prodotti Disponibili</h5>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Descrizione</th>
                  <th scope="col">Tipo Prodotto</th>
                  <th scope="col">Data Inserimento</th>
                </tr>
              </thead>
              <tbody>
                {prodotti.map((product) => (
                  <tr key={product.id}>
                    <td>{product.nome}</td>
                    <td>{product.descrizione}</td>
                    <td>{product.tipo_prodotto?.tipo}</td>
                    <td>{new Date(product.data_inserimento).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdottiPage;
