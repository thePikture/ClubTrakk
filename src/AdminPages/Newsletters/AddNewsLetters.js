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
    TextareaAutosize,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

const AddNewsLetters = () => {

    return (
        <>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <Typography variant='h4' sx={{ paddingBottom: "15px", color: "#ad0040" }}>
                    Newsletters</Typography>
                <Box sx={{ background: "white", borderRadius: "10px", padding: "15px" }}>
                    <Typography variant='h6' sx={{ paddingBottom: "15px" }}>Add Newsletters</Typography>
                    <form>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Name"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Issue number"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <InputLabel>Issue number</InputLabel>
                                <TextField
                                    fullWidth
                                    type="date"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <InputLabel>File</InputLabel>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="file"
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

export default AddNewsLetters;