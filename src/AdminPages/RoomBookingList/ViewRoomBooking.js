import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  Box,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Footer from '../../components/Footer';

import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';
// mock
import USERLIST from '../../_mock/user';

// ----------------------------------------------------------------------

export default function ViewRoomBooking() {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom sx={{ color: '#ad0040' }}>
            Room Bookings{' '}
          </Typography>
        </Stack>
        <Card>
          <Box sx={{ padding: '20px 35px' }}>
            <Typography variant="h5">Booking Details</Typography>
          </Box>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, padding: '20px' }}>
              <Table sx={{ border: '1px solid rgba(241, 243, 244, 1)' }}>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(241, 243, 244, 1)' }}>
                      Member Type
                    </TableCell>
                    <TableCell align="left">Membership Type</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Member Name</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Membership Number</TableCell>
                    <TableCell>Membership Number</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Mobile Number</TableCell>
                    <TableCell>Affliated Club</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Is Booking For Guest</TableCell>
                    <TableCell>Company Name</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Guest Full Name</TableCell>
                    <TableCell>Subject</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Guest Address</TableCell>
                    <TableCell>Message</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Guest Country</TableCell>
                    <TableCell>IN</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Guest State</TableCell>
                    <TableCell>TN</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Guest Pincode</TableCell>
                    <TableCell>555555</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Guest Mobile Number</TableCell>
                    <TableCell>9XXXXXXXXX</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Guest Email</TableCell>
                    <TableCell>email@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>
                      Who Will Settle The Bills
                    </TableCell>
                    <TableCell>Guest</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>
                      Number of Additional Persons Staying
                    </TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Room Preference</TableCell>
                    <TableCell>Cottage</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ minWidth: 800, padding: '20px' }}>
              <Table sx={{ border: '1px solid rgba(241, 243, 244, 1)' }}>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(241, 243, 244, 1)' }}>
                      Check In Date
                    </TableCell>
                    <TableCell align="left">Membership Type</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Check Out Date</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
        <Footer />
      </Container>
    </Page>
  );
}
