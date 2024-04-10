import { FormLabel, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  value: string | number;
  setValue: Dispatch<SetStateAction<string>>;
  title: string;
  id: string;
}

export const MyInputBlock: React.FC<Props> = ({ value, setValue, title, id }) => {
  return (
    <>
      <FormLabel>
        {title}
      </FormLabel>
      <TextField 
        id={id} 
        variant="outlined"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </>
  )
}
