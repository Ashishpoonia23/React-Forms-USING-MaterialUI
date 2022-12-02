import React from "react";
import Checkbox from '@mui/material/Checkbox'

import { Button } from "@mui/material";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';

function TableDelete() {
 //table values//
 function createData(id, Name, Rollno, CollegeName, Degree, FatherName, MotherName) {
    return { id, Name, Rollno, CollegeName, Degree, FatherName, MotherName };
}
//table data
const rows = [
    createData(1, 'Ram', 12, 'University Of Mumbai', 'BBA', 'Akash', 'Aashvi'),
    createData(2, 'shyam', 20, 'IIT Bombay', 'BCA', 'Akhil', 'Lakshmi'),
    createData(3, 'Aaditya', 22, 'NMIMS University', 'MBA', 'Akshay', 'Meera'),
    createData(4, 'Aarav', 25, 'Grant Medical College', 'MBBS', 'Anand', 'Saanvi'),
    createData(5, 'Ajay', 45, 'Tata Institute of Social Sciences', 'BSC', 'Anil.', 'Sarika'),
];
const [row, setPosts] = useState([]);


const handleDelete = (postIndex) => {
  setPosts((prevPosts) =>
    prevPosts.filter((_, index) => index !== postIndex)
  );
};
    return(
        <div>
<TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" id="tabl">
                        <TableHead>
                            <TableRow>
                                <TableCell><Checkbox  /></TableCell>
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
                            {rows.map((row, postIndex) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell ><Checkbox   /></TableCell>
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
                                        <Button 
                                        >Edit</Button>
                                        <Button onClick={() => handleDelete(postIndex)}>Delete</Button>
                                    </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                </div>
    );

    
}
export default TableDelete

var chkk1 = document.getElementById("tabchbx");
        var table1 = document.getElementById("tabl");
        if (chkk1.checked === true) {
            // for (i = 0; i <= table1.rows.length; i++) {
            //     table1.rows[i+1].cells[0].firstElementChild.checked = true
            // }
           let tableChek=document.getElementsByName("tabchbx1")
          
             for (i = 0; i < tableChek.length; i++) {
                tableChek[i].checked = true
            }
        }
        else {
            let tableChek=document.getElementsByName("tabchbx1")

             for (i = 0; i < tableChek.length; i++) {
                tableChek[i].checked = false
            }
        }