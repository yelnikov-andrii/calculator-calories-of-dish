import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { DishInterface, ProductInterface, deleteProduct } from '../../store/productsSlice';
import { MyForm } from './MyForm';
import { Box, Button } from '@mui/material';
import { NoProducts } from './NoProducts';
import { TotalInfoDish } from './TotalInfoDish';

interface Props {
  dishId: number;
}

export const Dish: React.FC<Props> = () => {
  const { dishes, dishIdToChange } = useSelector((state: RootState) => state.product);
  const [formIsOpen, setFormIsOpen] = React.useState(false);
  const foundDish = dishes.find((dish: DishInterface) => dish.id === dishIdToChange) || null;
  const dispatch = useDispatch();

  function deleteProductHandler(productId: number) {
    dispatch(deleteProduct(productId));
  }

  return (
    <Box
      sx={{
        padding: '5px 10px',
        border: '1px solid teal'
      }}
    >
      {foundDish.products?.length ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
        {foundDish.products.map((product: ProductInterface) => (
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              padding: '0'
            }}
          >
            <span
              style={{
                minWidth: '100px',
                maxWidth: '200px',
                width: '100%',
                display: 'inline-block',
                fontSize: '18px',
                fontWeight: '600'
              }}
            >
              {product.name}
            </span>
            <Button
              variant='contained'
              onClick={() => {

              }}
            >
              Відкрити продукт
            </Button>
            <Button
              variant='contained'
              onClick={(e) => {
                deleteProductHandler(product.id);
              }}
            >
              Видалити продукт
            </Button>
          </Box>
        ))}
        </Box>
      ) : (
        <NoProducts />
      )}
      <TotalInfoDish 
        products={foundDish.products}
      />
      <Box>
        <Button
          onClick={() => {
            setFormIsOpen(true);
          }}
          variant='contained'
        >
          Додати продукт
        </Button>
      </Box>
      {formIsOpen && (
        <MyForm />
      )}
    </Box>
  )
}
