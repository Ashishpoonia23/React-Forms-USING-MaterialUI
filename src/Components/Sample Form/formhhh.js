
import { useForm} from "react-hook-form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import FormHelperText from '@mui/material/FormHelperText';
function Formhhh ()
{
    const { register, formState: { errors }, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);

    return(

<Box
 m="1"
 p="1"
  display="flex"
  justifyContent="center"
  
  minHeight="100vh"
  maxWidth="200px"
>
<form onSubmit={handleSubmit(onSubmit)} >
<br></br>
<TextField                                                                                                                                                                                                                                                                                                                                                                         
label="First Name" 
variant="outlined" 
{...register("firstName", { required: "First Name is required" })}  
error={Boolean(errors.firstName)}
helperText={errors.firstName?.message}
/>

<br></br>
<TextField  
label="Middle Name"
 variant="outlined" 
 {...register("middleName" , { required: "Middle Name is required" })}  
 error={Boolean(errors.middleName)}
helperText={errors.middleName?.message}
 />
<br></br>
<TextField  
label="Last Name" 
variant="outlined" 
{...register("lastName", { required: "Last Name is required" })}   
error={Boolean(errors.lastName)}
helperText={errors.lastName?.message} 
/>
<br></br>
<FormControl error={Boolean(errors.gender)}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio {...register("gender" , { required: "Gender is required" })} />} label="Female" />
        <FormControlLabel value="male" control={<Radio {...register("gender" , { required: "Gender is required" })} />} label="Male" />
        <FormControlLabel value="other" control={<Radio {...register("gender" , { required: "Gender is required" })}/>} label="Other" />
      </RadioGroup>
      <FormHelperText>{errors.gender?.message}</FormHelperText>
    </FormControl>
    <br></br>
    <Checkbox {...register("validate")} />
    <br></br>
    <FormControl fullWidth error={Boolean(errors.age)}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
           label="Age"
           {...register("age", { required: "Age is required" })}
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>{errors.age?.message}</FormHelperText>
      </FormControl>
      <br></br>
      <Switch {...register("switch")} />
      <br></br>
      <Button variant="contained" type="submit">Submit</Button>
</form>
</Box>


    );
}
export default Formhhh