// src/components/QuoteList.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Paper } from '@mui/material';

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quotes');
      setQuotes(response.data);
    } catch (error) {
      console.error('Error fetching quotes', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        
      </Typography>
      {quotes.length > 0 ? (
        quotes.map((quote) => (
          <Paper key={quote._id} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography
              variant="body1"
              sx={{ wordWrap: 'break-word', wordBreak: 'break-word' }}
            >
              {quote.text}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ mt: 1, wordWrap: 'break-word', wordBreak: 'break-word' }}
            >
              - {quote.author}
            </Typography>
          </Paper>
        ))
      ) : (
        <Typography variant="h6" align="center">
          No quotes available.
        </Typography>
      )}
    </Box>
  );
};

export default QuoteList;
