import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Warning as WarningIcon,
  Category as CategoryIcon,
  LocalOffer as PriceIcon,
} from '@mui/icons-material';
import api from '../services/api';

function Dashboard() {
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [productStats, setProductStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    averagePrice: 0,
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const lowStockResponse = await api.getLowStockProducts(10);
      setLowStockProducts(lowStockResponse.data);

      const productsResponse = await api.getAllProducts();
      const products = productsResponse.data;

      const categories = new Set(products.map(p => p.category));
      const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

      setProductStats({
        totalProducts: products.length,
        totalCategories: categories.size,
        averagePrice: products.length ? (totalPrice / products.length).toFixed(2) : 0,
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div sx={{ textAlign: 'center', marginBottom: 2 }}>
              <Typography variant="h6">Total Products</Typography>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                {productStats.totalProducts}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div sx={{ textAlign: 'center', marginBottom: 2 }}>
              <Typography variant="h6">Categories</Typography>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                {productStats.totalCategories}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div sx={{ textAlign: 'center', marginBottom: 2 }}>
              <Typography variant="h6">Average Price</Typography>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                ${productStats.averagePrice}
              </Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}
            >
              <WarningIcon sx={{ color: 'error.main', marginRight: 1 }} />
              Low Stock Products
            </Typography>
            <List>
              {lowStockProducts.map((product) => (
                <ListItem
                  key={product.id}
                  sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
                >
                  <ListItemText
                    primary={product.name}
                    secondary={`Quantity: ${product.quantity} | Category: ${product.category}`}
                  />
                </ListItem>
              ))}
              {lowStockProducts.length === 0 && (
                <ListItem>
                  <ListItemText primary="No low stock products" />
                </ListItem>
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;