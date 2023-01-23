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
