import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Box } from '@mui/material';
import { DishInterface } from '../../store/productsSlice';
import { Dish } from '../ChangeProducts/Dish';
import { DishBlock } from './DishBlock';

export const Dishes = () => {
  const { dishes, dishIdToChange } = useSelector((state: RootState) => state.product);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      {dishes.map((dish: DishInterface) => (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <DishBlock 
            dish={dish}
          />
          <Box>
            {dishIdToChange === dish.id && <Dish dishId={dishIdToChange} />}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
