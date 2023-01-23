import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
    Box,
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

const TABLE_HEAD = [
    { id: 'date', label: 'Date', alignRight: false },
    { id: 'voucherType', label: 'Voucher Type', alignRight: false },
    { id: 'voucherNo', label: 'Voucher No.', alignRight: false },
    { id: 'particulars', label: 'Particulars', alignRight: false },
    { id: 'debit', label: 'Debit', alignRight: false },
    { id: 'credit', label: 'Credit', alignRight: false },
    { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function Transaction() {
    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('name');

    const [filterName, setFilterName] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = USERLIST.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };


    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

    const isUserNotFound = filteredUsers.length === 0;

    return (
        <Page title="User">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
                    <Typography variant="h4" gutterBottom>
                        Transactions
                    </Typography>
                </Stack>

                <Card>
                    <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table>
                                <UserListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={USERLIST.length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {filteredUsers.map((row) => {
                                        const { id, name, role, status, company, avatarUrl, isVerified } = row;
                                        const isItemSelected = selected.indexOf(name) !== -1;

                                        return (
                                            <TableRow
                                                hover
                                                key={id}
                                                tabIndex={-1}
                                                role="checkbox"
                                                selected={isItemSelected}
                                                aria-checked={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    {/* <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, name)} /> */}
                                                </TableCell>
                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Typography variant="subtitle2" noWrap>
                                                            1/12/2023
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="left">Voucher</TableCell>
                                                <TableCell align="left">12</TableCell>
                                                <TableCell align="left">part </TableCell>
                                                <TableCell align="center">400 </TableCell>
                                                <TableCell align="center">200 </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    <TableRow>
                                        <TableCell padding="checkbox" />
                                        <TableCell component="th" scope="row" padding="none" />
                                        <TableCell align="left"> </TableCell>
                                        <TableCell align="left"> </TableCell>
                                        <TableCell align="right" sx={{ fontWeight: "600" }}>Sub Total</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "700", color: "#007bff" }}>400 </TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "700", color: "#007bff" }}>200 </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell padding="checkbox" />
                                        <TableCell component="th" scope="row" padding="none" />
                                        <TableCell align="left"> </TableCell>
                                        <TableCell align="left"> </TableCell>
                                        <TableCell align="left"> </TableCell>
                                        <TableCell align="left" sx={{ fontWeight: "600" }}>Closing Balance </TableCell>
                                        <TableCell align="left" sx={{ fontWeight: "700", color: "green" }}>200 </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Scrollbar>
                </Card>
            </Container>
        </Page>
    );
}
