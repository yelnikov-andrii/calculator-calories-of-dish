import { Button, Input } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDish } from '../../store/productsSlice';
import { RootState } from '../../store';
import { saveProductsToLocaleStorage } from '../../helpers/saveDataToLocaleStorage';

export const Form = () => {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();
  const { dishes } = useSelector((state: RootState) => state.product);

  function addDishHandler() {
    const dish: any = {
      name,
      id: Date.now(),
      products: [
      ]
    };

    if (name) {
      dispatch(addDish(dish));
      setName('');
    }
  }

  React.useEffect(() => {
    saveProductsToLocaleStorage(dishes);
  }, [dishes]);

  return (
    <div>
      <Input 
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Button
        onClick={addDishHandler}
      >
        Додати страву
      </Button>
    </div>
  )
}
