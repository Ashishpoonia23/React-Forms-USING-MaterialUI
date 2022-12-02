import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid';
function Radiiii() {
    const [gennder, setgennder] = useState('female');
    const [showobj, setshowobj] = useState(false)
    const shwobj = () => {
        var ele = document.getElementById('chkbx')
        if (ele.checked){
            setshowobj(true)
        }
        else {
            setshowobj(false)
        }
    }

    console.log({ gennder })
    const handleChange = (event) => {
        setgennder(event.target.value);

    };

    return (
        <div>
            <Grid container spacing={2} rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item md={1}>
                    <Checkbox color="success"
                    id='chkbx'
                        onClick={shwobj}
                    />
                </Grid>
{(showobj) &&
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={gennder}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
}
            </Grid>
        </div>
    );

}
export default Radiiii