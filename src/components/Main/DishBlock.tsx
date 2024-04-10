import { Box, Button } from '@mui/material';
import React from 'react'
import { DishInterface, deleteDish, setDishIdToChange } from '../../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  dish: DishInterface;
}

export const DishBlock: React.FC<Props> = ({ dish }) => {
  const { dishIdToChange } = useSelector((state: RootState) => state.product);
  
  const dispatch = useDispatch();
  
  function closeDish(){
    dispatch(setDishIdToChange(null));
  }

  function openDish(dishId: number) {
    dispatch(setDishIdToChange(dishId));
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}
    >
      <span 
        style={{
          maxWidth: '100px',
          display: 'inline-block',
          width: '100%'
        }}
      >
        {dish.name}
      </span>
      <Button 
        variant='contained'
        onClick={() => {
          if (dish.id === dishIdToChange) {
            closeDish();
          } else {
            openDish(dish.id);
          }
        }}
      >
        {dishIdToChange === dish.id ? 'Закрити страву' : 'Відкрити страву'}
      </Button>
      <Button 
        variant='contained'
        onClick={() => {
          dispatch(deleteDish(dish.id));
        }}
      >
        Видалити страву
      </Button>
    </Box>
  )
}
