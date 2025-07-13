import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Container, Paper } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Animation Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Oops! Something went wrong.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We encountered an error while rendering animations.
              </Typography>
              <Button
                variant="contained"
                onClick={() => this.setState({ hasError: false })}
              >
                Try Again
              </Button>
            </Paper>
          </motion.div>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;