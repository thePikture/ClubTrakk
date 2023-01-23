import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const [loginType, setLoginType] = useState()
  const [dashboardArray, setDashboardArray] = useState([])

  useEffect(() => {
    const type = sessionStorage.getItem("type")
    if (type === "admin") {
      const data = [{ title: "Members", total: 2372, icon: 'mdi:account-group', name: "member", background: "#007bff", },
      { title: "Events", total: 20, icon: 'mdi:events', name: "events", background: "#ffc107" },
      { title: "Newsletter", total: 12, icon: 'typcn:news', name: "newsletter", background: "#28a745" },
      { title: "Circulars & Rules", total: 159, icon: 'fe:users', name: "newsletter", background: "#dc3545" },
      ]
      setDashboardArray(data)
    } else {
      const data = [{ title: "Members", total: 260, icon: 'mdi:account-group', name: "member", background: "#007bff", },
      { title: "Events", total: 26, icon: 'mdi:events', name: "events", background: "#ffc107" },
      { title: "Newsletter", total: 60, icon: 'typcn:news', name: "newsletter", background: "#28a745" },
      { title: "Users", total: 20, icon: 'fe:users', name: "users", background: "#dc3545" },
      ]
      setDashboardArray(data)

    }
    setLoginType(loginType)
  }, [])


  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        {/* {loginType === "admin" ? (<Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Members" total={260} sx={{ background: "#007bff", color: "white" }} icon={'mdi:account-group'} name={"member"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Events" total={20} sx={{ background: "#ffc107", color: "white" }} icon={'mdi:events'} name={"event"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Newsletter" total={30} sx={{ background: "#28a745", color: "white" }} icon={'typcn:news'} name={"newsletter"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Users" total={10} sx={{ background: "#dc3545", color: "white" }} icon={'fe:users'} name={"users"} />
          </Grid>
        </Grid>) : (<Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Members" total={260} sx={{ background: "#007bff", color: "white" }} icon={'mdi:account-group'} name={"member"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Events" total={20} sx={{ background: "#ffc107", color: "white" }} icon={'mdi:events'} name={"event"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Newsletter" total={30} sx={{ background: "#28a745", color: "white" }} icon={'typcn:news'} name={"newsletter"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Circulars & Rules" total={10} sx={{ background: "#dc3545", color: "white" }} icon={'fe:users'} name={"users"} />
          </Grid>
        </Grid>)} */}
        <Grid container spacing={3}>
          {dashboardArray.map((item) => (<Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={item.title} total={item.total} sx={{ background: item.background, color: "white" }} icon={item.icon} name={item.name} />
          </Grid>))}
        </Grid>
      </Container>
    </Page>
  );
}
