/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ProductInterface } from '../../store/productsSlice';

interface Props {
  products: ProductInterface[];
}

export const TotalInfoDish: React.FC<Props> = ({ products }) => {
  const totalMassOfDish = React.useMemo(() => {
  return products.reduce((init, product: ProductInterface) => init + +product.mass, 0);
  }, [products]);
  
  const totalProtein = React.useMemo(() => {
    return products.reduce((init, product) => init + ((product.mass / totalMassOfDish) * +product.protein), 0).toFixed(2);
  }, [products]);

  const totalLipids = React.useMemo(() => {
    return products.reduce((init, product) => init + ((product.mass / totalMassOfDish) * +product.lipids), 0).toFixed(2);
  }, [products]);

  const totalCarbs = React.useMemo(() => {
    return products.reduce((init, product) => init + ((product.mass / totalMassOfDish) * +product.carbs), 0).toFixed(2);
  }, [products]);

  return (
    <div>
      <p
        style={{
          minWidth: '100px',
          maxWidth: '200px',
          width: '100%',
          display: 'block',
          fontSize: '18px',
          fontWeight: '600'
        }}
      >
      {`Маса страви: ${totalMassOfDish} г.`}
      </p>
      <p
       style={{
        minWidth: '100px',
          maxWidth: '200px',
          width: '100%',
          display: 'block',
          fontSize: '18px',
          fontWeight: '600'
      }} 
      >
        {`Протеїн: ${totalProtein}`}
      </p>
      <p
        style={{
          minWidth: '100px',
          maxWidth: '200px',
          width: '100%',
          display: 'block',
          fontSize: '18px',
          fontWeight: '600'
        }}
      >
        {`Ліпіди: ${totalLipids}`}
      </p>
      <p
        style={{
          minWidth: '100px',
          maxWidth: '200px',
          width: '100%',
          display: 'block',
          fontSize: '18px',
          fontWeight: '600'
        }}
      >
        {`Углеводи: ${totalCarbs}`}
      </p>
    </div>
  )
}
