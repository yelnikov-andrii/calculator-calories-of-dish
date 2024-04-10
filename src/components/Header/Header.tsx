import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{
        display: 'flex',
        gap: '10px'
      }}>
        <Link to="/">
          Main
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
