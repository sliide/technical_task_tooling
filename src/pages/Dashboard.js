import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/Copyright";
import LaunchpadForm from "../components/LaunchpadForm";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Toolbar,
  Typography,
  Container,
  Link,
  Paper
} from '@mui/material';

const theme = createTheme();

export default function Dashboard() {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('dummyToken', '');
    navigate("../", { replace: true });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Box display='flex' flexGrow={1} alignItems="center">
            <DashboardIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Dashboard
            </Typography>
          </Box>
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              Launchpad Customisation
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph  sx={{ mb: 5 }}>
              Tweak the first screen your users will see
            </Typography>
            <React.Fragment>
              <LaunchpadForm />
            </React.Fragment>
          </Paper>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
