import { Box, Container } from '@mui/material'
import React from 'react'
import { Dishes } from './Dishes'
import { MyModal } from '../UI/MyModal';
import { Form } from './Form';

export const Main: React.FC<any> = () => {
  return (
    <Container maxWidth="xl">
      <Box 
        sx={{
          padding: '50px 0'
        }}
      >
        <MyModal
          buttonTitle='Додати страву'
        >
          <Form />
        </MyModal>
        <Dishes />
      </Box>
    </Container>
  )
}
