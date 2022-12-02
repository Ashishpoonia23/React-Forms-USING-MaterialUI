import { Grid } from '@mui/material';
import React from 'react'
import { Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Formdetails.css';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function createData(Sno, Name, Rollno, CollegeName, Degree, FatherName, MotherName) {
    return { Sno, Name, Rollno, CollegeName, Degree, FatherName, MotherName };
}

const rows = [
    createData(1, 'Ram', 12, 'University Of Mumbai', 'BBA', 'Akash', 'Aashvi'),
    createData(2, 'shyam', 20, 'IIT Bombay', 'BCA', 'Akhil', 'Lakshmi'),
    createData(3, 'Aaditya', 22, 'NMIMS University', 'MBA', 'Akshay', 'Meera'),
    createData(4, 'Aarav', 25, 'Grant Medical College', 'MBBS', 'Anand', 'Saanvi'),
    createData(5, 'Ajay', 45, 'Tata Institute of Social Sciences', 'BSC', 'Anil.', 'Sarika'),
];
var name = "";


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

function Formdetails() {
    const [lhcdetails, setLhcdetails] = useState([]);
    const options = ['10th', '12th', 'Graduation', 'Post Graduation'];


    function showdta(e, index) {
        setLhcdetails([])
        debugger;

        var table1 = document.getElementById("tabl");

        for (var i = 0; i < table1.rows.length; i++) {
            if (i === index) {

                let lhc_listObj = {
                    Sno: table1.rows[i + 1].cells[0].innerHTML,
                    Name: table1.rows[i + 1].cells[1].innerHTML,
                    Rollno: table1.rows[i + 1].cells[2].innerHTML,
                    CollegeName: table1.rows[i + 1].cells[3].innerHTML,
                    Degree: table1.rows[i + 1].cells[4].innerHTML,
                    FatherName: table1.rows[i + 1].cells[5].innerHTML,
                    MothertName: table1.rows[i + 1].cells[6].innerHTML,
                }
                setLhcdetails((prevArray) => {
                    return [...prevArray, lhc_listObj];
                });
            }


        }

        setOpen(true);
    }
    console.log(lhcdetails)
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () =>;
    const handleClose = () => setOpen(false);

    const [message, setMessage] = useState('');
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');
    const [message4, setMessage4] = useState('');
    const [message5, setMessage5] = useState('');
    const [message6, setMessage6] = useState('');
    const [message7, setMessage7] = useState('');
    const [message8, setMessage8] = useState('');
    const [message9, setMessage9] = useState('');
    const [message10, setMessage10] = useState('');
    const [message11, setMessage11] = useState('');


    const handleChange = event => {
        setMessage(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange1 = event => {
        setMessage1(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange2 = event => {
        setMessage2(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange3 = event => {
        setMessage3(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange4 = event => {
        setMessage4(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange5 = event => {
        setMessage5(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange6 = event => {
        setMessage6(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange7 = event => {
        setMessage7(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange8 = event => {
        setMessage8(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange9 = event => {
        setMessage9(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange10 = event => {
        setMessage10(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleChange11 = event => {
        setMessage11(event.target.value);

        console.log('value is:', event.target.value);
    };
    /*const resetInputField = () => {
        setMessage("")
        setMessage1("")
        setMessage2("")
        setMessage3("")
        setMessage4("")
        setMessage5("")
        setMessage6("")
        setMessage7("")
        setMessage8("")
        setMessage9("")
        setMessage10("")
        setMessage11("")};*/
    return (
        <Box
            sx={{
                p: 2,
                backgroundColor: 'grey.50',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                justifyContent: "center",
            }}
        >
            <form>
                <Container >
                    <Typography variant="h3" color='primary' gutterBottom style={{ textAlign: "center" }}>Information</Typography>

                    <Typography variant="h5" color='secondary' gutterBottom>Student Details</Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} container rowSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ textAlign: "center" }}>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="First Name" variant="outlined" onChange={handleChange} value={message}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Middle Name" variant="outlined" onChange={handleChange1} value={message1}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Last Name" variant="outlined" onChange={handleChange2} value={message2}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="DOB" variant="outlined" onChange={handleChange3} value={message3}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Adress" variant="outlined" onChange={handleChange4} value={message4}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Pin Code" variant="outlined" onChange={handleChange5} value={message5}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Father Name" variant="outlined" onChange={handleChange6} value={message6}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Mother Name" variant="outlined" onChange={handleChange7} value={message7} ></TextField>
                        </Grid>

                    </Grid>
                    <Grid >
                        <Grid item xs={4}>
                            <Typography variant="h5" color='secondary' gutterBottom>Education Details</Typography>
                        </Grid>
                    </Grid>

                    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} container spacing={{ xs: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="College Details" variant="outlined" onChange={handleChange8} value={message8}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Autocomplete
                                disablePortal
                                id="Education-Details"
                                options={options}


                                renderInput={(params) => <TextField {...params} size="small" value={message11} onChange={handleChange11} label="Education" />}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Degree" variant="outlined" onChange={handleChange9} value={message9}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" size="small" label="Passing Year" variant="outlined" onChange={handleChange10} value={message10}
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h3" color='primary' gutterBottom style={{ textAlign: "center" }}>Other Details</Typography>

                    <Typography variant="h5" color='secondary' gutterBottom>Previous Education Details</Typography>



                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" id="tabl">
                            <TableHead>
                                <TableRow>
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
                                        <TableCell component="th" scope="row">
                                            {row.Sno}
                                        </TableCell>
                                        <TableCell align="right">{row.Name}</TableCell>
                                        <TableCell align="right">{row.Rollno}</TableCell>
                                        <TableCell align="right">{row.CollegeName}</TableCell>
                                        <TableCell align="right">{row.Degree}</TableCell>
                                        <TableCell align="right">{row.FatherName}</TableCell>
                                        <TableCell align="right">{row.MotherName}</TableCell>

                                        <TableCell align="right"><Button variant="contained" onClick={(e) => showdta(e, i)}
                                            name="radios"
                                        >More Details</Button></TableCell>

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
                                        {lhcdetails.map((row) => (
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
                                                <TableCell align="right">{row.MothertName}</TableCell>


                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box >
                    </Modal>

                    <br></br>
                    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained">Submit</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" onClick={() => window.location.reload(false)}>Clear</Button>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </Box>
    );
}

export default Formdetails
