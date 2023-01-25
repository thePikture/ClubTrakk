import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Transaction from './pages/Transaction/Transaction';
import Invoice from './pages/Invoice&Payment/Invoice';
import RoomBooking from './pages/RoomBooking/RoomBooking';
import EventCalendar from './pages/EventCalendar/EventCalendar';
import MemberDirectory from './pages/MemberDirectory/MemberDirectory';
import CircularNotification from './pages/CircularNotification/CircularNotification';
import MemberLogin from './pages/MemberLogin';
import AdminLogin from './pages/AdminLogin';
import Event from './AdminPages/Event/Event';
import NewEvent from './AdminPages/Event/NewEvent';
import CircularRules from './AdminPages/CircularsRules/CircularsRules';
import NewCircularsRules from './AdminPages/CircularsRules/NewCircularsRules';
import Newslettters from './AdminPages/Newsletters/Newsletters';
import AddNewsLetters from './AdminPages/Newsletters/AddNewsLetters';
import RoomBookingList from './AdminPages/RoomBookingList/RoomBookingList';
import Administration from './AdminPages/Administration/Administration';
import NewAdministration from './AdminPages/Administration/NewAdministration';
import Messages from './AdminPages/Messages/Messages';
import ViewMessage from './AdminPages/Messages/ViewMessage';
import ViewRoomBooking from './AdminPages/RoomBookingList/ViewRoomBooking';
import NewMembers from './AdminPages/Members/NewMembers';
import MembersList from './AdminPages/Members/MembersList';
import WarnlnList from './AdminPages/Warnln/WarnlnList';
import AddWarnln from './AdminPages/Warnln/AddWarnln';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'transaction', element: <Transaction /> },
        { path: 'invoice-payment', element: <Invoice /> },
        { path: 'room-booking', element: <RoomBooking /> },
        { path: 'event-calendar', element: <EventCalendar /> },
        { path: 'member-directory', element: <MemberDirectory /> },
        { path: 'cirular-notification', element: <CircularNotification /> },
        { path: 'event', element: <Event /> },
        { path: 'new-event', element: <NewEvent /> },
        { path: 'circular-rules', element: <CircularRules /> },
        { path: 'new-circular-rules', element: <NewCircularsRules /> },
        { path: 'newsletter', element: <Newslettters /> },
        { path: 'add-newsletter', element: <AddNewsLetters /> },
        { path: 'room-booking-list', element: <RoomBookingList /> },
        { path: 'administration', element: <Administration /> },
        { path: 'new-administration', element: <NewAdministration /> },
        { path: 'messages', element: <Messages /> },
        { path: 'members-list', element: <MembersList /> },
        { path: 'new-members', element: <NewMembers /> },
        { path: 'view-message', element: <ViewMessage /> },
        { path: 'view-roombooking', element: <ViewRoomBooking /> },
        { path: 'warnln-list', element: <WarnlnList /> },
        { path: 'add-warnln', element: <AddWarnln /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'member-login', element: <MemberLogin /> },
        { path: 'admin-login', element: <AdminLogin /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
