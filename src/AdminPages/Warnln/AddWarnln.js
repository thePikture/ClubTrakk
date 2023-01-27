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
    TextareaAutosize,
} from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const AddWarnln = () => {
    const [adult, setAdult] = useState(0)
    const [children, setChildren] = useState(0)
    const [guestAdult, setGuestAdult] = useState(0)
    const [guestChildren, setGuestChildren] = useState(0)


    return (
        <>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <Typography variant='h4' sx={{ paddingBottom: "15px", color: "#ad0040" }}>
                    Warn Request</Typography>
                <Box sx={{ background: "white", borderRadius: "10px", padding: "15px" }}>
                    <Typography variant='h6' sx={{ paddingBottom: "15px" }}>Add Warn</Typography>
                    <form>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={6} sx={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Member Code</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Member Code"
                                    >
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                        <MenuItem>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Event Name</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Event Name"
                                    >
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                        <MenuItem>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <Box sx={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }}>
                                    <Box >Members</Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <InputLabel>Adult</InputLabel>
                                        <ButtonGroup sx={{ height: "40px" }} variant="contained" aria-label="outlined primary button group">
                                            <Button size='small' sx={{ fontSize: "26px" }}
                                                onClick={() => {
                                                    if (adult <= 0) {
                                                        setAdult(0)
                                                    } else {
                                                        setAdult(adult - 1)
                                                    }
                                                }}>-</Button>
                                            <TextField
                                                size='small'
                                                type="text"
                                                value={adult}
                                                sx={{ width: "100px" }}
                                            />
                                            <Button sx={{ fontSize: "26px" }} onClick={() => setAdult(adult + 1)}>+</Button>
                                        </ButtonGroup>
                                    </Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <InputLabel>Children</InputLabel>
                                        <ButtonGroup sx={{ height: "40px" }} variant="contained" aria-label="outlined primary button group">
                                            <Button sx={{ fontSize: "26px" }} onClick={() => {
                                                if (children <= 0) {
                                                    setChildren(0)
                                                } else {
                                                    setChildren(children - 1)
                                                }
                                            }}>-</Button>
                                            <TextField
                                                sx={{ width: "100px" }}
                                                type="text"
                                                value={children}
                                                size='small'
                                            />
                                            <Button sx={{ fontSize: "26px" }} onClick={() => setChildren(children + 1)}>+</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <Box sx={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }}>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <InputLabel>Veg</InputLabel>
                                        <TextField
                                            size='small'
                                            type="text"
                                            value=''
                                            sx={{ width: "150px" }}
                                        />
                                    </Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <InputLabel>Non-Veg</InputLabel>
                                        <TextField
                                            size='small'
                                            type="text"
                                            value=''
                                            sx={{ width: "150px" }}
                                        />
                                    </Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <InputLabel>Total</InputLabel>
                                        <TextField
                                            sx={{ width: "150px" }}
                                            type="text"
                                            value=''
                                            size='small'
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <Box sx={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }}>
                                    <Box sx={{ marginBottom: "10px" }}>Guest&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <ButtonGroup sx={{ height: "40px" }} variant="contained" aria-label="outlined primary button group">
                                            <Button size='small' sx={{ fontSize: "26px" }}
                                                onClick={() => {
                                                    if (guestAdult <= 0) {
                                                        setGuestAdult(0)
                                                    } else {
                                                        setGuestAdult(guestAdult - 1)
                                                    }
                                                }}>-</Button>
                                            <TextField
                                                size='small'
                                                type="text"
                                                value={guestAdult}
                                                sx={{ width: "100px" }}
                                            />
                                            <Button sx={{ fontSize: "26px" }} onClick={() => setGuestAdult(guestAdult + 1)}>+</Button>
                                        </ButtonGroup>
                                    </Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <ButtonGroup sx={{ height: "40px" }} variant="contained" aria-label="outlined primary button group">
                                            <Button sx={{ fontSize: "26px" }} onClick={() => {
                                                if (guestChildren <= 0) {
                                                    setGuestChildren(0)
                                                } else {
                                                    setGuestChildren(guestChildren - 1)
                                                }
                                            }}>-</Button>
                                            <TextField
                                                sx={{ width: "100px" }}
                                                type="text"
                                                value={guestChildren}
                                                size='small'
                                            />
                                            <Button sx={{ fontSize: "26px" }} onClick={() => setGuestChildren(guestChildren + 1)}>+</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={12}>
                                <Box sx={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }}>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <TextField
                                            size='small'
                                            type="text"
                                            value=''
                                            sx={{ width: "150px" }}
                                        />
                                    </Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <TextField
                                            size='small'
                                            type="text"
                                            value=''
                                            sx={{ width: "150px" }}
                                        />
                                    </Box>
                                    <Box sx={{ marginBottom: "10px" }}>
                                        <TextField
                                            sx={{ width: "150px" }}
                                            type="text"
                                            value=''
                                            size='small'
                                        />
                                    </Box>
                                </Box>
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

export default AddWarnln;