import { TextField, MenuItem} from '@mui/material'
import React from 'react'
import { Stack } from 'react-bootstrap'
function Practice() {
  return ( 
   
  <Stack>
    <TextField label='Name' color='secondary' size='large' select fullWidth SelectProps={{multiple: true}}>
<MenuItem value='1'>India</MenuItem>
<MenuItem value='2'>us</MenuItem>
<MenuItem value='3'>uk</MenuItem>
<MenuItem value='4'>uae</MenuItem>
<MenuItem value='5'>India</MenuItem>
    </TextField>
    
  
    </Stack>
  
    
  )  
}

export default Practice