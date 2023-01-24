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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Members = () => {
    return (
        <>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <Typography variant='h4' sx={{ paddingBottom: "15px", color: "#ad0040" }}>Member</Typography>
                <Box sx={{ background: "white", borderRadius: "10px", padding: "15px" }}>
                    <Typography variant='h6' sx={{ paddingBottom: "15px" }}>Add Member</Typography>
                    <form>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={6} sm={4} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Member profile type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Member profile type*"
                                    >
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                        <MenuItem>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                {/* <InputLabel>Member code</InputLabel> */}
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Member Code"
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Member type*</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Member profile type*"
                                    >
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                        <MenuItem>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <InputLabel>Start-Date</InputLabel>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="date"
                                />
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <InputLabel>End-Date</InputLabel>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="date"
                                />
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <InputLabel>Start-Time</InputLabel>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="time"
                                />
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <InputLabel>End-Time</InputLabel>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="time"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <InputLabel>Image</InputLabel>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="file"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Event category"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Location</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Location"
                                    >
                                        <MenuItem>p</MenuItem>
                                        <MenuItem>p</MenuItem>
                                        <MenuItem>p</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Other location"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Dress code"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Charges per member"
                                />
                            </Grid>

                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Guest children charges"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Min age to attend event"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Club facility</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Club facility"
                                    >
                                        <MenuItem>p</MenuItem>
                                        <MenuItem>p</MenuItem>
                                        <MenuItem>p</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <Typography variant='h5'>Add Event Files</Typography>
                            </Grid>

                            {/* {error.length > 0 && (<Grid item xs={12} sx={12}>
                                <Box sx={{ color: "red" }}>{error}</Box>
                            </Grid>)} */}
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

export default Members;