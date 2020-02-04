import React, { useEffect } from 'react';
import Gallery from '../Gallery/Gallery';

import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCar } from '../Cars/carsSlice';

import { Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const { marke, modelis, metai, nuotraukos, kaina } = useSelector(
    selectCar(id)
  );

  useEffect(() => {
    if (!marke) history.push('/');
  });

  if (marke) {
    return (
      <div>
        <h1>
          {marke} {modelis} ({metai})
        </h1>
        <h2>{kaina} €</h2>

        <Gallery images={nuotraukos} full></Gallery>
        <Link to="/">back</Link>
      </div>
    );
  }

  return '';
};

export default Details;
