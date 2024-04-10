import { Box, Button, Modal } from '@mui/material'
import React from 'react'

interface Props {
  children: React.ReactNode;
  buttonTitle: string;
}

export const MyModal: React.FC<Props> = ({ children, buttonTitle }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
    <Button onClick={handleOpen}>
      {buttonTitle}
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box sx={{
        maxWidth: '400px',
        borderRadius: '8px',
        padding: '5px 10px',
        background: '#fff'
      }}>
        {children}
      </Box>
    </Modal>
    </>
  )
}
