import React from "react";

import { mostraProdotti } from "../axios";

const ProdottiPage = () => {
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
