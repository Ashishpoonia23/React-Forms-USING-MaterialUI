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

import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
} from '@mui/x-data-grid-generator';

function NNForm() {
    // const [selected, setSelected] = React.useState([]);

    // const handleSelectAllClick = (event) => {
    //     if (event.target.checked) {
    //         const newSelected = rows.map((n) => n.name);
    //         setSelected(newSelected);
    //         return;
    //     }
    //     setSelected([]);
    // };
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


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





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

    const [isEdit, setEdit] = React.useState(false);
    //table data
    const [rows, setRows] = useState([
        { id: 1, Name: 'Ram', Rollno: 12, CollegeName: 'University Of Mumbai', Degree: 'BBA', FatherName: 'Akash', MotherName: 'Aashvi', marks: '465', Education: '' },
        { id: 2, Name: 'shyam', Rollno: 20, CollegeName: 'IIT Bombay', Degree: 'BCA', FatherName: 'Akhil', MotherName: 'Lakshmi', marks: '75', Education: '' },
        { id: 3, Name: 'Aaditya', Rollno: 22, CollegeName: 'NMIMS University', Degree: 'MBA', FatherName: 'Akshay', MotherName: 'Meera', marks: '86578', Education: '' },
        { id: 4, Name: 'Aarav', Rollno: 25, CollegeName: 'Grant Medical College', Degree: 'MBBS', FatherName: 'Anand', MotherName: 'Saanvi', marks: '786', Education: '' },
        { id: 5, Name: 'Ajay', Rollno: 45, CollegeName: 'Tata Institute of Social Sciences', Degree: 'BSC', FatherName: 'Anil.', MotherName: 'Sarika', marks: '78678', Education: '' },
    ]);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // const handleAdd = (i) => {
    //     setRows([
    //         ...rows,
    //         {
    //             id: rows(i), Name: "",
    //             Rollno: "", CollegeName: "", Degree: "", FatherName: '', MotherName: '', marks: ''
    //         },
    //     ]);
    //     setEdit(true);
    // };
    // const handleEdit = (i) => {
    //     // If edit mode is true setEdit will 
    //     // set it to false and vice versa
    //     setEdit(!isEdit);
    // };

    const handleInputChange = (e, i) => {

        const { name, value } = e.target;
        const list = [...rows];
        list[i][name] = value;
        setRows(list);
    };

    // Function to handle save
    const handleSave = () => {
        setEdit(!isEdit);
        setRows(rows);
        console.log("saved : ", rows);


    };

    const handleRemoveClick = (i) => {
        const list = [...rows];
        list.splice(i, 1);
        setRows(list);
        setOpen(false)
    };

    //tab chbox
    const chkkd = (i) => {
        debugger;
        var chkk1 = document.getElementById("tabchbx");
        var table1 = document.getElementById("tabl");
        if (chkk1.checked === true) {
            for (i = 0; i <= table1.rows.length; i++) {
                table1.row[i].cell[0].checked = true
            }
        }
        else {
            for (i = 0; i <= table1.rows.length; i++) {
                table1.row[i].cell[0].checked = false
            }
        }

    }





    const Education = [
        { Value: "10th", label: "10th" },
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
    const [value, setValue] = useState([])
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

    //table input field data
    /*  const [tabData, updatetabData] = useState(initialtabData);
      const handleChange9 = (e) => {
       
       updatetabData({
           ...tabData,
   
           // Trimming any whitespace
           [e.target.name]: (e.target.value)
           
       });
   };
   const handleSubmit9 = (e) => {
        
       e.preventDefault()
       console.log(tabData);
       
      
   };*/
    //Full Form Data Submit in Array

    const handleChange2 = (e) => {

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

    function fun() {

        document.getElementById('outlined-basic').value = '';
        document.getElementById('date').value = '';
        document.getElementById('outlined-basic1').value = '';
        setgendder([]);
        setDegree([]);
        setValue([])
    }

    return (

        <form onSubmit={handleSubmit2}>
            <Container>

                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={1}>
                        <Checkbox {...label} color="success"
                            id='chkbx'
                            onClick={shwobj}
                            required
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
                        <Badge badgeContent={gendder} color="primary">
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
                    <Grid item md={4} sm={8} xs={8}>
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
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" id="tabl" >

                        <TableHead>
                            <TableRow style={{ background: "orange" }}>
                                <TableCell><Checkbox
                                    id="tabchbx"

                                    onClick={chkkd}
                                /></TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Roll No</TableCell>
                                <TableCell align="right">CollegeName</TableCell>
                                <TableCell align="right">Degree</TableCell>
                                <TableCell align="right">FatherName</TableCell>
                                <TableCell align="right">MotherName</TableCell>
                                <TableCell align="right">Marks</TableCell>
                                <TableCell align="right">Education</TableCell>
                                <TableCell align="right"><ButtonGroup>
                                    <Button color="success" variant="contained" onClick={handleSave}><DoneIcon /></Button>
                                </ButtonGroup>
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => (<>

                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    style={{ background: "grey" }}
                                >
                                    <TableCell ><Checkbox id="tabchbx1" /></TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.Name}</TableCell>
                                    <TableCell align="right">{row.Rollno}</TableCell>
                                    <TableCell align="right">{row.CollegeName}</TableCell>
                                    <TableCell
                                        style={{
                                            background: "blue",

                                            fontSize: "15px",
                                            color: "white",
                                        }} align="right">{row.Degree}</TableCell>
                                    <TableCell align="right">{row.FatherName}</TableCell>
                                    <TableCell align="right">{row.MotherName}</TableCell>
                                    <TableCell align="right"><TextField size="small" id="marks" label="Marks" name="marks" value={row.marks}
                                        variant="outlined" onChange={(e) => handleInputChange(e, i)} /></TableCell>
                                    <TableCell>
                                        <Select

                                            style={{


                                                width: "150px",

                                            }}

                                            value={row.Education}
                                            label="education"
                                            onChange={(e) => handleInputChange(e, i)}
                                            name="Education"

                                        >
                                            <MenuItem value={"10th"}>10th</MenuItem>
                                            <MenuItem value={"12th"}>12th</MenuItem>
                                            <MenuItem value={"Graduation"}>Graduation</MenuItem>
                                            <MenuItem value={"Post Graduation"}>Post Graduation</MenuItem>
                                        </Select>
                                    </TableCell>
                                    <TableCell align="right"><ButtonGroup variant="contained" size="small">

                                        <Button color="secondary" onClick={handleOpen}><DeleteIcon /></Button>

                                    </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            </>
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


                    </Box >
                </Modal>
                {open && (
                    <div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Confirm Delete"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Are you sure to delete
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={(i) => handleRemoveClick(i)}
                                    color="primary"
                                    autoFocus
                                >

                                    <DoneIcon />
                                </Button>
                                <Button
                                    onClick={handleClose}
                                    color="primary"
                                    autoFocus
                                >
                                    <ClearIcon />
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )}
                <br></br>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={rowws}
                        columns={collumns}
                        checkboxSelection
        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        components={{ Toolbar: GridToolbar }}
                    />
                </div>
                <br></br>
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" type="submit">Submit</Button>
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

export default NNForm