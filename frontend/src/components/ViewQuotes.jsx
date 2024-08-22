// src/pages/ViewQuotes.js

import QuoteList from '../components/QuoteList';
import { Typography, Container } from '@mui/material';

const ViewQuotes = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',}}>
        All Quotes
      </Typography>
      <QuoteList />
    </Container>
  );
};

export default ViewQuotes;
