import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { height } from '@mui/system';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function EditTabls() {

    const [rows, setRows] = useState([
        { id:1, firstname: "aman", lastname: "raj", city: "abc", age: "12" },
        { id:2, firstname: "ajay", lastname: "singh", city: "def", age: "33" },
        { id:3, firstname: "amar", lastname: "ahuja", city: "ghi", age: "55" },
        { id:4, firstname: "akbar", lastname: "raman", city: "jkl", age: "45" },
        
    ]);

    // Initial states
    const [open, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [showConfirm, setShowConfirm] = React.useState(false);

    // Function For closing the alert snackbar
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    // Function For adding new row object
    const handleAdd = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1, firstname: "",
                lastname: "", city: "", age: ""
            },
        ]);
        setEdit(true);
    };

    // Function to handle edit 
    const handleEdit = (i) => {
        // If edit mode is true setEdit will 
        // set it to false and vice versa
        setEdit(!isEdit);
    };

    // Function to handle save
    const handleSave = () => {
        setEdit(!isEdit);
        setRows(rows);
        console.log("saved : ", rows);
        setDisable(true);
        setOpen(true);
    };

    // The handleInputChange handler can be set up to handle
    // many different inputs in the form, listen for changes 
    // to input elements and record their values in state
    const handleInputChange = (e, index) => {
        setDisable(false);
        const { name, value } = e.target;
        const list = [...rows];
        list[index][name] = value;
        setRows(list);
    };

    // Showing delete confirmation to users
    const handleConfirm = () => {
        setShowConfirm(true);
    };

    // Handle the case of delete confirmation where 
    // user click yes delete a specific row of id:i
    const handleRemoveClick = (i) => {
        const list = [...rows];
        list.splice(i, 1);
        setRows(list);
        setShowConfirm(false);
    };

    // Handle the case of delete confirmation 
    // where user click no 
    const handleNo = () => {
        setShowConfirm(false);
    };
    return (
        <div> <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">LastName</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Age</TableCell>
                        <TableCell align="center"><ButtonGroup>
                            <Button onClick={handleAdd}>

                                <AddIcon />
                            </Button>
                            {disable ? (
                                <Button variant="contained" disabled align="right" onClick={handleSave}>

                                    SAVE
                                </Button>
                            ) : (
                                <Button variant="contained" align="right" onClick={handleSave}>

                                    SAVE
                                </Button>
                            )}
                        </ButtonGroup>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow

                        >
                            {isEdit ? (<>
                                
                                <TableCell align="center">
                                    <TextField
                                        value={row.firstname}
                                        name="firstname"
                                        size='small'
                                        onChange={(e) => handleInputChange(e, i)}
                                    />
                                </TableCell>

                                <TableCell  align="center">
                                    <TextField
                                    value={row.lastname}
                                    name="lastname"
                                    size='small'
                                    onChange={(e) => handleInputChange(e, i)} />
                                </TableCell>
                                
                                <TableCell align="center"><FormControl fullWidth>

                                    <select
                                        style={{
                                            width: "200px",
                                            height: "40px"
                                        }}
                                        name="city"
                                        value={row.city}
                                        onChange={(e) => handleInputChange(e, i)}
                                    >
                                        <option value=""></option>
                                        <option value="Karanja">Karanja</option>
                                        <option value="Hingoli">Hingoli</option>
                                        <option value="Bhandara">Bhandara</option>
                                        <option value="Amaravati">Amaravati</option>
                                        <option value="Pulgaon">Pulgaon</option>
                                    </select>
                                </FormControl></TableCell>
                                <TableCell align="center">
                                <TextField
                                    value={row.age}
                                    name="age"
                                    size='small'
                                    onChange={(e) => handleInputChange(e, i)} />
                                
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={handleConfirm}>
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                                
                            </>
                            ) : (
                                <>
                                    <TableCell  align="center">
                                        {row.firstname}
                                    </TableCell>
                                    <TableCell  align="center">
                                        {row.lastname}
                                    </TableCell>
                                    <TableCell align="center" >
                                        {row.city}
                                    </TableCell>
                                    <TableCell
                                      align="center"
                                    >{row.age}</TableCell>
                                    <TableCell align="center"><Button onClick={handleConfirm}>
                                                    <DeleteIcon />
                                                </Button></TableCell>
                                </>
                            )}
                            
                                            {showConfirm && (
                                                <div>
                                                    <Dialog
                                                        open={showConfirm}
                                                        onClose={handleNo}
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
                                                                onClick={() => handleRemoveClick(i)}
                                                                color="primary"
                                                                autoFocus
                                                            >

                                                                <DoneIcon />
                                                            </Button>
                                                            <Button
                                                                onClick={handleNo}
                                                                color="primary"
                                                                autoFocus
                                                            >
                                                                <ClearIcon />
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </div>
                                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            
        </div>
    )
}
