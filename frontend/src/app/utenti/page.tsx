"use client";

import React, { useEffect, useState } from "react";
import { getUtenti } from "../axios";

interface Utente {
  id: number;
  nome: string;
  email: string;
}

const UtentiPage = () => {
  const [utenti, setUtenti] = useState<Utente[]>([]);

  useEffect(() => {
    const fetchUtenti = async () => {
      try {
        const data = await getUtenti();
        setUtenti(data);
      } catch (error) {
        console.error("Errore nel recupero degli utenti:", error);
      }
    };

    fetchUtenti();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h1>Lista Utenti</h1>
        </div>
        <div className="col-12">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {utenti.map((utente) => (
                <tr key={utente.id}>
                  <th scope="row">{utente.id}</th>
                  <td>{utente.nome}</td>
                  <td>{utente.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UtentiPage;
