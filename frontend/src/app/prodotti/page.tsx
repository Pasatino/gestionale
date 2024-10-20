"use client";

import React, { useEffect, useState } from "react";
import { getProducts, createProduct } from "../axios";

import type { Prodotto , TipoProdotto} from "../axios";



const ProdottiPage = () => {
  const [prodotti, setProdotti] = useState<Prodotto[]>([]);
  const [tipiProdotto, setTipiProdotto] = useState<{ id: number; tipo: string }[]>([]);

  const [nuovoProdotto, setNuovoProdotto] = useState({
    nome: '',
    descrizione: '',
    tipo_prodotto_id: '',
  });

  useEffect(() => {
    const fetchProdotti = async () => {
      try {
        const data = await getProducts();
        setProdotti(data);

        const tipiUnici = Array.from(new Set(data.map((p) => p.tipo_prodotto)))
          .map((tipo) => ({
            id: tipo.id,
            tipo: tipo.tipo,
          }));
        setTipiProdotto(tipiUnici);
      } catch (error) {
        console.error("Errore nel recupero dei prodotti:", error);
      }
    };

    fetchProdotti();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNuovoProdotto((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const tipoSelezionato = tipiProdotto.find((t) => t.id.toString() === nuovoProdotto.tipo_prodotto_id);
      if (!tipoSelezionato) {
        throw new Error('Tipo prodotto non valido');
      }

      const nuovoProdottoData = {
        nome: nuovoProdotto.nome,
        descrizione: nuovoProdotto.descrizione,
        data_inserimento: new Date().toISOString(),
        tipo_prodotto_id: parseInt(nuovoProdotto.tipo_prodotto_id),
      };

      const prodottoCreato = await createProduct(nuovoProdottoData);
      setProdotti([...prodotti, prodottoCreato]);
      setNuovoProdotto({ nome: '', descrizione: '', tipo_prodotto_id: '' });
      alert('Prodotto creato con successo!');
    } catch (error) {
      console.error('Errore nella creazione del prodotto:', error);
      alert('Errore nella creazione del prodotto');
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Lista Prodotti</h1>
      <div className="card-wrapper card-space">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Aggiungi Nuovo Prodotto</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="productName">Nome Prodotto</label>
                <input type="text" className="form-control" id="productName" name="nome" value={nuovoProdotto.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="productDescription">Descrizione</label>
                <textarea className="form-control" id="productDescription" name="descrizione" value={nuovoProdotto.descrizione} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="productType">Tipo Prodotto</label>
                <select className="form-control" id="productType" name="tipo_prodotto_id" value={nuovoProdotto.tipo_prodotto_id} onChange={handleChange} required>
                  <option value="">Seleziona un tipo</option>

                  {tipiProdotto.map((tipo)=>
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.tipo}
                    
                  </option>)}
                </select>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Crea Prodotto</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="card-wrapper">
        <div className="card">
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
