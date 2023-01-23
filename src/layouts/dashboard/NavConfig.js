// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
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
  {
    title: 'Invoice & Payment',
    path: '/dashboard/invoice-payment',
    icon: getIcon('fa-solid:file-invoice'),
  },
  {
    title: 'Event Calendar',
    path: '/dashboard/event-calendar',
    icon: getIcon('material-symbols:calendar-month'),
  },
  {
    title: 'Room Booking',
    path: '/dashboard/room-booking',
    icon: getIcon('tabler:brand-booking'),
  },
  {
    title: 'Circular & Notification',
    path: '/dashboard/cirular-notification',
    icon: getIcon('mdi:bell-notification'),
  },
  {
    title: 'Member Directory',
    path: '/dashboard/member-directory',
    icon: getIcon('eva:person-add-fill'),
  },
];

export default navConfig;
