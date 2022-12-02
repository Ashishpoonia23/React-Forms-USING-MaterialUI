import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';

function Login() {
    function Btn() {
        var c=parseInt(document.getElementById("a").value);
        var d=parseInt(document.getElementById("b").value);
        
        console.log(c+d);
      
        
      }
  return (
<Container maxWidth="sm" >
    <Grid container sx={{textAlign:"center", backgroundColor: "grey"}}rowSpacing={{ lg: 1 } }>
    <Grid item xs={12}>
     <h1>Login</h1>
     </Grid>
     <Grid item xs={12}>
     <TextField id="a" label="Username" variant="outlined" />
     </Grid>
     <Grid item xs={12}>
     <TextField id="b" label="Password" variant="outlined" />
     </Grid>
     <Grid item xs={12}>
     <Button onClick={Btn} variant="contained">Login</Button>
     </Grid>
    </Grid>
  </Container>
  );
}
export default Login;
