// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const adminNavConfig = [
    {
        title: 'Dashboard',
        path: '/dashboard/app',
        icon: getIcon('material-symbols:dashboard-rounded'),
    },
    {
        title: 'Transaction',
        path: '/dashboard/transaction',
        icon: getIcon('grommet-icons:transaction'),
    },
];

export default adminNavConfig;
