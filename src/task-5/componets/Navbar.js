import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

function Navbar() {

  const navigate = useNavigate()

  const handleHomePage = () => {
    navigate('/')
    localStorage.removeItem('loggedInUser');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleHomePage}>
            Home
          </Typography>
          <Box >
            <Button color='inherit' onClick={handleHomePage}>Logout</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar