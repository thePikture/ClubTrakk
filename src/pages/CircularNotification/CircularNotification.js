import {
    Grid,
    Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import pdf from '../../image/pdf.png';

const CircularNotification = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <Typography variant='h5' sx={{ paddingBottom: "15px" }}>Circulars & Notification</Typography>
                <Box sx={{ background: "white", borderRadius: "13px", padding: "15px" }}>
                    <Box sx={{ margin: "10px", fontSize: "18px", fontWeight: 600, color: "#9d1251" }}> General Circulars</Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={6} sm={4} md={4}>
                            <Paper elevation={3}>
                                <Card sx={{ padding: "5px" }}>
                                    <Box sx={{ display: 'flex' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: "25%", margin: "auto" }}
                                            image={pdf}
                                            alt="Pdf file"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" sx={{ color: "#22196b" }} variant="h5">
                                                    Closing of Book sales
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    General cirulars
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button sx={{ background: "grey" }} variant="contained" fullWidth type="submit">Download</Button>
                                    </Box>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default CircularNotification;