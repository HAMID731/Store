import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Add as AddIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '& .MuiTypography-root': {
    flexGrow: 1,
  },
  '& .MuiButton-root': {
    marginLeft: theme.spacing(2),
  },
  '& .MuiButton-startIcon': {
    marginRight: theme.spacing(1),
  },
}));

function Navbar() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          SuperMarket
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          color="inherit"
          startIcon={<DashboardIcon />}
        >
          Dashboard
        </Button>
        <Button
          component={RouterLink}
          to="/products"
          color="inherit"
        >
          Products
        </Button>
        <Button
          component={RouterLink}
          to="/products/new"
          color="inherit"
          startIcon={<AddIcon />}
        >
          Add Product
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;