import { Box, Button } from '@mui/material'
import React from 'react'
import { MyInputBlock } from './MyInputBlock';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/productsSlice';

export const MyForm = () => {
  const [name, setName] = React.useState('');
  const [protein, setProtein] = React.useState('0');
  const [lipids, setLipids] = React.useState('0');
  const [carbs, setCarbs] = React.useState('0');
  const [mass, setMass] = React.useState('0');
  const dispatch = useDispatch();

  function addProductHandler() {
    const newProduct = {
      name,
      mass,
      protein,
      lipids,
      carbs,
      id: Date.now()
    };
    dispatch(addProduct(newProduct));
    clearInputs();
  }

  function clearInputs() {
    setMass('');
    setProtein('');
    setLipids('');
    setCarbs('');
    setName('');
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
        paddin: '10px 0'
      }}
    >
      <MyInputBlock 
        id='name'
        value={name}
        setValue={setName}
        title='Product name'
      />
      <MyInputBlock 
        id='mass'
        value={mass}
        setValue={setMass}
        title='Mass'
      />
      <MyInputBlock 
        id='protein'
        value={protein}
        setValue={setProtein}
        title='Proteins'
      />
      <MyInputBlock 
        id='lipids'
        value={lipids}
        setValue={setLipids}
        title='Lipids'
      />
      <MyInputBlock 
        id='carbs'
        value={carbs}
        setValue={setCarbs}
        title='Carbs'
      />
      <Button
        onClick={addProductHandler}
      >
        Додати продукт
      </Button>
    </Box>
  )
}
