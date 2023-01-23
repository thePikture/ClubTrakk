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
        title: 'Event',
        path: '',
        icon: getIcon('mdi:events'),
    },
    {
        title: 'Warnln',
        path: '',
        icon: getIcon('simple-icons:eventstore'),
    },
    {
        title: 'Members',
        path: '',
        icon: getIcon('ic:outline-card-membership'),
    },
    {
        title: 'Circulars and rules',
        path: '',
        icon: getIcon('mdi:circular-arrows'),
    },
    {
        title: 'Newslettters',
        path: '',
        icon: getIcon('fluent:news-20-regular'),
    },
    {
        title: 'Room bookings',
        path: '',
        icon: getIcon('tabler:brand-booking'),
    },
    {
        title: 'Messages',
        path: '',
        icon: getIcon('simple-icons:googlemessages'),
    },
    {
        title: 'Administration',
        path: '',
        icon: getIcon('medical-icon:administration'),
    },
];

export default adminNavConfig;
