import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    OutlinedInput,
    InputAdornment,
    Stack,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import axios from 'axios';

const RoomBooking = () => {

    return (
        <>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <Typography variant='h5' sx={{ paddingBottom: "15px" }}>Rooms bookings</Typography>
                <Box sx={{ background: "white", borderRadius: "10px", padding: "15px" }}>
                    <form>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Member Type"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    size='small'
                                    label="Member Name"
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    size='small'
                                    label="Membership Number"
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Mobile Number"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="email"
                                    label="Email"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <FormControl fullWidth size='small'>
                                    <InputLabel>Is Booking For Guest</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Is Booking For Guest"
                                    >
                                        <MenuItem>Yes</MenuItem>
                                        <MenuItem>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Guest Full Name"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    size='small'
                                    label="Guest Address"
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Guest Country"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Guest State"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Guest Pincode"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Guest Mobile Number"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="email"
                                    label="Guest Email"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Who Will Settle The Bills"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Number Of Additional Persons Staying"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Room Preference"
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker
                                        label="Check In Date"
                                        // onChange={(newValue) => {
                                        //     startDate(newValue);
                                        // }}
                                        shouldDisableDate={() => false}
                                        renderInput={(params) => <TextField {...params} size='small' fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DatePicker
                                        label="Check Out Date"
                                        // onChange={(newValue) => {
                                        //     endDate(newValue);
                                        // }}
                                        renderInput={(params) => <TextField {...params} size='small' fullWidth />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <Button fullWidth variant="contained" type='submit'>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default RoomBooking;