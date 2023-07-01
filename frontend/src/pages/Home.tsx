import "./addButton.scss"
import {useContext, useEffect, useState} from "react";
import "./login.css"
import {Grid, Paper, Button} from "@mui/material";
import {AuthContext} from "../context/authContext";


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as dayjs from "dayjs";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from "axios";



function Home() {
    const backend_url = "http://localhost:3000/api"
    const {currentUser} = useContext(AuthContext)
    const [time, setTime] = useState(dayjs().$d);
    const [rows, setRows] = useState([]);
    const handleDateChange = (newValue, context) => {
        setTime(newValue.$d)
        // console.log(newValue.$d.toDateString());
    };
    console.log(time);

    const columns: GridColDef[] = [
        { field: 'number', headerName: 'amount', width: 130 },
        { field: 'cat', headerName: 'Category', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },

    ];
    useEffect(() => {
        const value = {
            month: time.getMonth() + 1,
            year: time.getFullYear(),
            uid: currentUser.id
        }
        console.log(value);
        async function getDataByMonth(){
            const res = await axios.get(backend_url + "/post/getPostsByMonth", {params: value})

            // console.log(new Date(res.data[0].date))
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].date = new Date(res.data[i].date).getDate()
            }

            setRows(res.data)
        }
        getDataByMonth();

    },[time])

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 88 },
    //     { id: 6, lastName: 'Melisandre', firstName: "kk", age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 10, lastName: 'Targaryen', firstName: 'Daenerys', age: 88 },
    //     { id: 11, lastName: 'Melisandre', firstName: "kk", age: 150 },
    //     { id: 12, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 13, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 88 },
    //     { id: 16, lastName: 'Melisandre', firstName: "kk", age: 150 },
    //     { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 20, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 21, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];

    return (
        <div>
            {currentUser?
                <div>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer fullWidth components={['DatePicker']}>
                                <DatePicker
                                    fullWidth
                                    onChange={handleDateChange}
                                    defaultValue={dayjs()}
                                    label={'month'}
                                    views={['month', 'year']}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                        <div style={{}}>
                            <DataGrid
                                sx={{mt: 5}}
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 20 },
                                    },
                                }}
                                pageSizeOptions={[10, 20]}
                                checkboxSelection
                            />
                        </div>




                        <Paper></Paper>
                    </Grid>
                </div>

                :
                <Grid item sx={{mt: 10}}>
                    <Paper className="square" elevation={3}>
                    </Paper>
                </Grid>
            }




        </div>
    );
}

export default Home;