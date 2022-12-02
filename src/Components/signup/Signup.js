import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';


function Signup() {
  
  function Btn() {
    var c=parseInt(document.getElementById("a").value);
    var d=parseInt(document.getElementById("b").value);
    var e=parseInt(document.getElementById("g").value);
    var f=parseInt(document.getElementById("h").value);
    var j=parseInt(document.getElementById("i").value);
    
    console.log(c+d+e+f+j);
  
    
  }
    return (
    <Container maxWidth="sm" >
    
    <Grid container sx={{textAlign:"center", backgroundColor: "grey"}} rowSpacing={{ lg: 1 }}  columnSpacing={{ lg: 3 }}>
    <Grid item xs={12}>
     <h1>Sign up</h1>
     </Grid>
     <Grid item xs={6} sx={{textAlign:"right"}}>
     <TextField id="a" label="First Name" variant="outlined" size="small"/>
     </Grid>
     <Grid item xs={6} sx={{textAlign:"left"}}>
     <TextField id="b" label="Last Name" variant="outlined" size="small"/>
     </Grid>
  
     <Grid item xs={12}>
     <TextField id="g" label="Email" variant="outlined" size="small"/>
     </Grid>
     <Grid item xs={12}>
     <TextField id="h" label="Password" variant="outlined" size="small"/>
     </Grid>
     <Grid item xs={12}>
     <TextField id="i" label="Confirm Password" variant="outlined" size="small"/>
     </Grid>
     <Grid item xs={12}>
     <Button onClick={Btn} variant="contained">Signup</Button>
     </Grid>
    </Grid>
    </Container >
  );
}

export default Signup;
