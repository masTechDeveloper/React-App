import React from 'react';
import { Link } from 'react-router-dom';

export const Shop = () => {
  const data = [
    {
      name: 'Nike Show 01',
      img:
        'https://cdn-distance.pl/media/catalog/product/cache/07f4dbefc5ed4df4ee2ce08604f55f57/n/i/nike-air-huarache-run-ultra-gs-847569-004-847569004-6.jpg',
    },

    {
      name: 'Nike Show 02',
      img:
        'https://cdn-distance.pl/media/catalog/product/cache/07f4dbefc5ed4df4ee2ce08604f55f57/n/i/nike-air-huarache-run-ultra-gs-847569-004-847569004-6.jpg',
    },
    {
      name: 'Nike Show 03',
      img:
        'https://cdn-distance.pl/media/catalog/product/cache/07f4dbefc5ed4df4ee2ce08604f55f57/n/i/nike-air-huarache-run-ultra-gs-847569-004-847569004-6.jpg',
    },
  ];
  console.log(data);
  return (
    <div>
      {data.map((data, index) => (
        <h1 key={index}>
          <Link to={`/shop/${data.name}`}> {data.name} </Link>
        </h1>
      ))}
    </div>
  );
};
