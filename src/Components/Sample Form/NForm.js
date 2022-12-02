import React from "react";
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Container } from 'react-bootstrap';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import Badge from '@mui/material/Badge';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
} from '@mui/x-data-grid-generator';

function NForm() {

    //radion
    const [gendder, setgendder] = useState("");

    const handleChange6 = (event) => {
        setgendder(event.target.value);
        updateFormData({
            ...formData,

            // Trimming any whitespace
           gender: (event.target.value)
        });
    }

    //style//
    const style = {
        width: '800px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: '50%',
        transform: 'translate(-50%, -50%)',
    };


    const [checked, setChecked] = React.useState(false);

    const handleChange3 = (event) => {
        setChecked(event.target.checked);
    };


    //select

    const [degree, setDegree] = React.useState("");

    const handleChange10 = (event) => {
        setDegree(event.target.value);
        updateFormData({
            ...formData,

            // Trimming any whitespace
           degree: (event.target.value)
        });

    };
  


    //table values//
    function createData(Sno, Name, Rollno, CollegeName, Degree, FatherName, MotherName) {
        return { Sno, Name, Rollno, CollegeName, Degree, FatherName, MotherName };
    }
    //table data
    const rows = [
        createData(1, 'Ram', 12, 'University Of Mumbai', 'BBA', 'Akash', 'Aashvi'),
        createData(2, 'shyam', 20, 'IIT Bombay', 'BCA', 'Akhil', 'Lakshmi'),
        createData(3, 'Aaditya', 22, 'NMIMS University', 'MBA', 'Akshay', 'Meera'),
        createData(4, 'Aarav', 25, 'Grant Medical College', 'MBBS', 'Anand', 'Saanvi'),
        createData(5, 'Ajay', 45, 'Tata Institute of Social Sciences', 'BSC', 'Anil.', 'Sarika'),
    ];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    //2nd table data show
    const [tabl2data, settabl2data] = useState([]);
    function showdta(e, index) {
        settabl2data([])
        debugger;

        var table1 = document.getElementById("tabl");

        for (var i = 0; i < table1.rows.length; i++) {
            if (i === index) {

                let tabbllee = {
                    Sno: table1.rows[i + 1].cells[1].innerHTML,
                    Name: table1.rows[i + 1].cells[2].innerHTML,
                    Rollno: table1.rows[i + 1].cells[3].innerHTML,
                    CollegeName: table1.rows[i + 1].cells[4].innerHTML,
                    Degree: table1.rows[i + 1].cells[5].innerHTML,
                    FatherName: table1.rows[i + 1].cells[6].innerHTML,
                    MothertName: table1.rows[i + 1].cells[7].innerHTML,
                }
                settabl2data((prevArray) => {
                    return [...prevArray, tabbllee];
                });
            }


        }

        setOpen(true);
    }
    console.log(tabl2data)
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () =>;
    const handleClose = () => setOpen(false);
    //autocompute values//
    
    const Education = [
        { Value:"10th", label: "10th" },
        { Value: "12th", label: "12th" },
        { Value: "Graduation", label: "Graduation" },
        { Value: "PostGraduation", label: "Post Graduation" },
    ];

   /* const [edducation, setedducation] = React.useState("");
debugger;
    const handleChange11 = (event) => {
        setedducation(event.target.value);
        updateFormData({
            ...formData,

            // Trimming any whitespace
           education: (event.target.value)
        });
    };*/
    const initialFormData = {
        firstname: "",
        lastname: "",
        dob: "",
        gender: "",
        education: "",
        degree: '',
    };
    const [formData, updateFormData] = useState(initialFormData);
const [value, setValue]=useState([])
    const [lTypeobj, setlTypeobj] = useState(updateFormData);
    function Education_type(e) {
        debugger;
        var m = e.target.textContent;
        let split = "";
    split = e.target.id.split("-");
    let id_name = split[0];
    if (id_name === "educatiiiiion") {


        setValue(m)
            if (m === '10th') {
                setlTypeobj((prevState) => {
                    return (
                        {
                            ...prevState,
                            education: 'A',
                        })
                });
            }
            if (m === '12th') {
                setlTypeobj((prevState) => {
                    return (
                        {
                            ...prevState,
                            education: 'B',
                        })
                });
            }
            if (m === 'Graduation') {
                setlTypeobj((prevState) => {
                    return (
                        {
                            ...prevState,
                            education: 'C',
                        })
                });
            }
            if (m === 'PostGraduation') {
                setlTypeobj((prevState) => {
                    return (
                        {
                            ...prevState,
                            education: 'D',
                        })
                });
            }
            

        }
        
    }
    
//Validation

    // radio show and hide using checkbox
    const [showobj, setshowobj] = useState(false)
    const shwobj = () => {
        var ele = document.getElementById('chkbx')
        if (ele.checked) {
            setshowobj(true)
        }
        else {
            setshowobj(false)
            setgendder("")
        }
    }
    //data input from textbox//
   
    
    //Full Form Data Submit in Array

    const handleChange2 = (e) => {
        debugger;
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: (e.target.value)
            
        });
    };
    const handleSubmit2 = (e) => {
         
        e.preventDefault()
        console.log(formData);
        console.log(lTypeobj);
        fun()
        
        // ... submit to API or something
    };

    //Data Grid Table
    const collumns = [
        { field: 'name', headerName: 'Name', width: 180, editable: true },
        { field: 'age', headerName: 'Age', type: 'number', editable: true },
        {
            field: 'dateCreated',
            headerName: 'Date Created',
            type: 'date',
            width: 180,
            editable: true,
        },
        {
            field: 'lastLogin',
            headerName: 'Last Login',
            type: 'dateTime',
            width: 220,
            editable: true,
        },
        {
            field: 'newLogin',
            headerName: 'New Login',
            type: 'dateTime',
            width: 220,
            editable: true,
        },
        { field: 'fatherName', headerName: 'Father Name', width: 180, editable: true },
        { field: 'motherName', headerName: 'Mother Name', width: 180, editable: true },
    ];


    const rowws = [
        {
            id: 1,
            name: randomTraderName(),
            age: 25,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 2,
            name: randomTraderName(),
            age: 36,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 3,
            name: randomTraderName(),
            age: 19,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 4,
            name: randomTraderName(),
            age: 28,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 5,
            name: randomTraderName(),
            age: 23,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 6,
            name: randomTraderName(),
            age: 23,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 7,
            name: randomTraderName(),
            age: 23,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 8,
            name: randomTraderName(),
            age: 23,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 9,
            name: randomTraderName(),
            age: 23,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 10,
            name: randomTraderName(),
            age: 23,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },
        {
            id: 11,
            name: randomTraderName(),
            age: 23,
            dateCreated: randomCreatedDate(),
            lastLogin: randomUpdatedDate(),
            newLogin: randomUpdatedDate(),
            fatherName: randomTraderName(),
            motherName: randomTraderName(),
        },

    ];
   
    function fun(){
        debugger
        document.getElementById('outlined-basic').value='';
        document.getElementById('date').value='';
        document.getElementById('outlined-basic1').value='';
        setgendder([]);
        setDegree([]);
        setValue([])
        }
    

    return (

        <form  onSubmit={handleSubmit2}>
            <Container>

                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={1}>
                        <Checkbox {...label} color="success"
                            id='chkbx'
                            onClick={shwobj}
                        />
                    </Grid>
                    <Grid item md={4}
                    >
                        {(showobj) &&
                            <FormControl>
                                <FormLabel >Gender</FormLabel>
                                <RadioGroup row
                                    value={gendder}
                                    onChange={handleChange6}
                                >
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        }
                    </Grid>
                </Grid>
                <br></br>
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={4}>

                        <TextField 
                        required 
                        id="outlined-basic" 
                        name="firstname" 
                        onChange={handleChange2} 
                        label="First Name" 
                        variant="outlined" 
                        
                        />


                    </Grid>
                    <Grid item md={4}>

                        <TextField 
                        required 
                        id="outlined-basic1" 
                        name="lastname" 
                        onChange={handleChange2} 
                        label="Last Name" 
                        variant="outlined"
                        
                        />

                    </Grid>
                    <Grid item md={4}>
                        <TextField
                        
                            id="date"
                            label="DOB"
                            type="date"
                            name="dob"
                            required
                            onChange={handleChange2}
                            defaultValue="2010-01-01"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <br></br>
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={4}>
                        <Badge badgeContent={gendder}  color="primary">
                            <TextField
                            
                               
                                label="Gender"
                                name="gender"
                                required
                                value={gendder}
                                onChange={handleChange2}

                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Badge>
                    </Grid>

                    <Grid item lg={4} md={4}>

                        <Autocomplete
                     
                      
                           
                            id="educatiiiiion"
                            options={Education}
                            value={value}
                            onChange={Education_type}
                            sx={{ width: '200px' }}
                            name="education"
                            required
                            renderInput={(params) => <TextField required {...params} label="Education" />}
                        />
                    </Grid>
                    <Grid item md={4} >
                        <FormControl fullWidth>
                            <InputLabel >Degree</InputLabel>
                            <Select
                      
                      
                                
                                value={degree}
                                label="Age"
                                onChange={handleChange10}
                                name={degree}
                                required
                            >
                                <MenuItem value={"10th"}>10th</MenuItem>
                                <MenuItem value={"12th"}>12th</MenuItem>
                                <MenuItem value={"Graduation"}>Graduation</MenuItem>
                                <MenuItem value={"Post Graduation"}>Post Graduation</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <br></br>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" id="tabl">
                        <TableHead>
                            <TableRow>
                                <TableCell><Checkbox {...label} checked={checked} onChange={handleChange3} /></TableCell>
                                <TableCell>S.no</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Roll No</TableCell>
                                <TableCell align="right">CollegeName</TableCell>
                                <TableCell align="right">Degree</TableCell>
                                <TableCell align="right">FatherName</TableCell>
                                <TableCell align="right">MotherName</TableCell>
                                <TableCell align="right">Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell ><Checkbox {...label} checked={checked} /></TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.Sno}
                                    </TableCell>
                                    <TableCell align="right">{row.Name}</TableCell>
                                    <TableCell align="right">{row.Rollno}</TableCell>
                                    <TableCell align="right">{row.CollegeName}</TableCell>
                                    <TableCell align="right">{row.Degree}</TableCell>
                                    <TableCell align="right">{row.FatherName}</TableCell>
                                    <TableCell align="right">{row.MotherName}</TableCell>

                                    <TableCell align="right"><ButtonGroup variant="contained">
                                        <Button onClick={(e) => showdta(e, i)}
                                        >Edit</Button>
                                        <Button>Delete</Button>
                                    </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            More Details
                        </Typography>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" id="tabl1">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>S.no</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Roll No</TableCell>
                                        <TableCell align="right">CollegeName</TableCell>
                                        <TableCell align="right">Degree</TableCell>
                                        <TableCell align="right">FatherName</TableCell>
                                        <TableCell align="right">MothertName</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tabl2data.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.Sno}
                                            </TableCell>
                                            <TableCell align="right">{row.Name}</TableCell>
                                            <TableCell align="right">{row.Rollno}</TableCell>
                                            <TableCell align="right">{row.CollegeName}</TableCell>
                                            <TableCell align="right">{row.Degree}</TableCell>
                                            <TableCell align="right">{row.FatherName}</TableCell>
                                            <TableCell align="right">{row.MotherName}</TableCell>


                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box >
                </Modal>
                <br></br>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={rowws}
                        columns={collumns}
                        experimentalFeatures={{ newEditingApi: true }}
                        components={{ Toolbar: GridToolbar }}
                    />
                </div>
                <br></br>
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained"  type="submit">Submit</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" onClick={() => window.location.reload(false)}>Clear</Button>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>

            </Container>
        </form>

    );
}

export default NForm