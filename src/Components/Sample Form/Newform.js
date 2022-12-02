import { Grid } from '@mui/material';
import React from 'react'

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import { useState } from 'react';


function Newform()
{
    const initialFormData = {
        firstname: "",
        middlename:"",
        lastname: "",
        dob:"",
        adress:"",
        pincode:"",
        fathername:"",
        mothernme:"",
      };
      
        const [formData, updateFormData] = useState(initialFormData);
      
        const handleChange = (e) => {
          updateFormData({
            ...formData,
      
            // Trimming any whitespace
            [e.target.name]: (e.target.value)
          });
        };
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(formData);
            // ... submit to API or something
          };
    return(
        <paper>
<Grid container spacing={{ xs: 2, md: 3 }}  rowSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ textAlign: "center" }}>
                    <Grid item xs={3}>
                        <TextField  name="firstname" size="small" label="First Name" variant="outlined" onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField name="middlename" size="small" label="Middle Name" variant="outlined" onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField name="lastname" size="small" label="Last Name" variant="outlined" onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField name="dob" size="small" label="DOB" variant="outlined" onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField name="adress" size="small" label="Adress" variant="outlined" onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField name="pincode" size="small" label="Pin Code" variant="outlined" onChange={handleChange} 
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField name="fathername" size="small" label="Father Name" variant="outlined" onChange={handleChange} />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField name="mothernme" size="small" label="Mother Name" variant="outlined" onChange={handleChange} ></TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" onClick={() => window.location.reload(false)}>Clear</Button>
                    </Grid>
                </Grid>
                </paper>
                
    );
}
export default Newform