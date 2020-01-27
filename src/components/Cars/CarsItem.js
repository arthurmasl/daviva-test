import React from 'react';
import Gallery from '../Gallery/Gallery';

const CarsItem = ({ marke, modelis, metai, nuotraukos, kaina }) => {
  return (
    <div className="cars-item">
      <Gallery images={nuotraukos}></Gallery>
      <div className="cars-item__details">
        <h3>{marke}</h3>
        <ul>
          <li>Modelis: {modelis}</li>
          <li>Metai: {metai}</li>
        </ul>
        <div className="price">{kaina} €</div>
      </div>
    </div>
  );
};

export default CarsItem;
