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

const NewEvent = () => {
    const [warnRequired, setWarnRequired] = useState(false)
    const [guestAllowed, setGuestAllowed] = useState(false)
    const [differentGuest, setDifferentGuest] = useState(false)
    const [inputList, setInputList] = useState([{ "name": "", "image": "" }]);

    const onChangeWarn = (e) => {
        if (e.target.checked === true) {
            setWarnRequired(true)
        } else {
            setWarnRequired(false)
        }
    }
    const onChangeGuestAllowed = (e) => {
        if (e.target.checked === true) {
            setGuestAllowed(true)
        } else {
            setGuestAllowed(false)
        }
    }
    const onChangeDifferentGuest = (e) => {
        if (e.target.checked === true) {
            setDifferentGuest(true)
        } else {
            setDifferentGuest(false)
        }
    }

    const handleAddClick = () => {
        setInputList([...inputList, { name: "", image: "" }]);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    return (
        <>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <Typography variant='h4' sx={{ paddingBottom: "15px", color: "#ad0040" }}>Events</Typography>
                <Box sx={{ background: "white", borderRadius: "10px", padding: "15px" }}>
                    <Typography variant='h6' sx={{ paddingBottom: "15px" }}>Add Event</Typography>
                    <form>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Code"
                                />
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
                                <InputLabel>Description</InputLabel>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data=""

                                    onReady={editor => {
                                        editor.editing.view.change((writer) => {
                                            writer.setStyle(
                                                "height",
                                                "200px",
                                                editor.editing.view.document.getRoot()
                                            );
                                        });
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                // onBlur={(event, editor) => {
                                //     console.log('Blur.', editor);
                                // }}
                                // onFocus={(event, editor) => {
                                //     console.log('Focus.', editor);
                                // }}
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
                                <FormControlLabel onChange={onChangeWarn} control={<Checkbox />} label=" Warn In Required?" />
                            </Grid>
                            {warnRequired && (<> <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Warn in last date and time"
                                />
                            </Grid>
                                <Grid item xs={12} sx={12}>
                                    <TextField
                                        fullWidth
                                        autoComplete="text"
                                        type="text"
                                        label="Max warn in allowed"
                                    />
                                </Grid></>)}
                            <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Charges per member"
                                />
                            </Grid>
                            <Grid item xs={12} sx={12}>
                                <FormControlLabel onChange={onChangeGuestAllowed} control={<Checkbox />} label="Guests Allowed?" />
                            </Grid>
                            {guestAllowed && <Grid item xs={12} sx={12}>
                                <FormControlLabel onChange={onChangeDifferentGuest} control={<Checkbox />} label="Are Charges Different For Guests?" />
                            </Grid>}
                            {differentGuest && <Grid item xs={12} sx={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="text"
                                    type="text"
                                    label="Guest charges"
                                />
                            </Grid>}
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
                            {inputList.map((x, i) => {
                                return (<>
                                    <Grid item xs={6} sm={4} md={4}>
                                        <InputLabel>Name</InputLabel>
                                        <TextField
                                            fullWidth
                                            autoComplete="text"
                                            type="text"
                                            name="name"
                                            onChange={e => handleInputChange(e, i)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={4} md={4}>
                                        <InputLabel>Image</InputLabel>
                                        <TextField
                                            fullWidth
                                            autoComplete="text"
                                            type="file"
                                            name="image"
                                            onChange={e => handleInputChange(e, i)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={4} md={4}>
                                        {inputList.length !== 1 && <Button variant="contained" onClick={() => handleRemoveClick(i)} type='submit' sx={{ background: "red", marginTop: "30px" }}>
                                            Remove
                                        </Button>}
                                    </Grid>
                                    <Grid item xs={12} sx={12}>
                                        {inputList.length - 1 === i && <Button variant="contained" onClick={handleAddClick} type='submit' sx={{ background: "#6c757d" }}>
                                            Add
                                        </Button>}
                                    </Grid>
                                </>);
                            })}

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

export default NewEvent;