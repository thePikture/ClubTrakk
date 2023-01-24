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
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';
// mock
import USERLIST from '../../_mock/user';

// ----------------------------------------------------------------------

export default function ViewMessage() {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom sx={{ color: '#ad0040' }}>
            Messages
          </Typography>
        </Stack>
        <Card>
          <Box sx={{ padding: '20px 35px' }}>
            <Typography variant="h5">Message Details</Typography>
          </Box>
          <TableContainer sx={{ minWidth: 800, padding: '20px' }}>
            <Table sx={{ border: '1px solid rgba(241, 243, 244, 1)' }}>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ width: '20%', borderRight: '1px solid rgba(241, 243, 244, 1)' }}>
                    Membership Type
                  </TableCell>
                  <TableCell align="left">Membership Type</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Name</TableCell>
                  <TableCell>Name</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Membership Number</TableCell>
                  <TableCell>Membership Number</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Affliated Club</TableCell>
                  <TableCell>Affliated Club</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Phone Number</TableCell>
                  <TableCell>Phone Number</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Company Name</TableCell>
                  <TableCell>Company Name</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Subject</TableCell>
                  <TableCell>Subject</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Message</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderRight: '1px solid rgba(241, 243, 244, 1)' }}>Country Details</TableCell>
                  <TableCell>Country Details</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </Page>
  );
}
