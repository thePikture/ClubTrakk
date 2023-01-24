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
    TextareaAutosize,
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
                                    <InputLabel>Member type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Member type"
                                    >
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                        <MenuItem>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Full Name"
                                />
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="email"
                                    label='Email'
                                />
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label='Mobile Number'
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <hr />
                            </Grid>
                        </Grid>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={6} sx={12}>
                                <Typography variant='h4' sx={{ padding: '15px 0px', color: "grey" }}>Home Address</Typography>
                                <Box>
                                    <InputLabel>Short description</InputLabel>
                                    <TextareaAutosize
                                        fullWidth
                                        minRows={4}
                                        style={{ width: "100%" }}
                                        type="text"
                                    />
                                </Box>
                                <Box sx={{ margin: "10px 0px" }}>
                                    <InputLabel>City</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                                <Box sx={{ margin: "10px 0px" }}>
                                    <InputLabel>Pincode</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                                <Box sx={{ margin: "15px 0px" }}>
                                    <FormControl fullWidth>
                                        <InputLabel>Country</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Country"
                                        >
                                            <MenuItem>1</MenuItem>
                                            <MenuItem>2</MenuItem>
                                            <MenuItem>3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <InputLabel>Home Phone</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <Typography variant='h4' sx={{ padding: '15px 0px', color: "grey" }}>Office Address</Typography>
                                <Box sx={{ margin: "10px 0px" }}>
                                    <InputLabel>Company</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                                <Box>
                                    <InputLabel>Address</InputLabel>
                                    <TextareaAutosize
                                        fullWidth
                                        minRows={4}
                                        style={{ width: "100%" }}
                                        type="text"
                                    />
                                </Box>
                                <Box sx={{ margin: "10px 0px" }}>
                                    <InputLabel>City</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                                <Box sx={{ margin: "10px 0px" }}>
                                    <InputLabel>Pincode</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                                <Box sx={{ margin: "15px 0px" }}>
                                    <FormControl fullWidth>
                                        <InputLabel>Country</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Country"
                                        >
                                            <MenuItem>1</MenuItem>
                                            <MenuItem>2</MenuItem>
                                            <MenuItem>3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ margin: "15px 0px" }}>
                                    <InputLabel>Office Phone</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                                <Box sx={{ margin: "15px 0px" }}>
                                    <InputLabel>Extension</InputLabel>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <hr />
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                Preferred communication address
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                Preferred communication address
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <hr />
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

export default Members;