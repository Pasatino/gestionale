import React, { useEffect, useState } from "react";

import { getProdotti, getProdotto, createProdotto, updateProdotto, deleteProdotto } from "../axios";

const ProdottiPage = () => {

  const [prodotti, setProdotti] = useState([]);
  const [newProdotto, setNewProdotto] = useState('');

  /* Con questa funzione recupero tutti i prodotti quando la pagina viene caricata */
  useEffect(() => {
    getProdotti().then(response => setProdotti(response.data)).catch(error => console.error(error));
  }, []);

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
        <table className="table table-primary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
        </div>
      </div>
    </div>
    
  );
};

export default ProdottiPage;
