import { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box } from '@mui/material';
import PropTypes from 'prop-types';

const QuoteForm = ({ onQuoteCreated }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/quotes', { text, author });
      if (typeof onQuoteCreated === 'function') {
        onQuoteCreated(response.data);
      } else {
        console.error('onQuoteCreated is not a function');
      }
      setText('');
      setAuthor('');
      alert('Quote added successfully!');
    } catch (error) {
      console.error('Error creating the quote', error);
      alert('Failed to add quote. Please try again.');
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Юу ч бичсэн болно л доо  >_< "
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        fullWidth
        sx={{ backgroundColor: 'white' }}
      />
      <TextField
        label="Нэр"
        variant="outlined"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        fullWidth
        sx={{ backgroundColor: 'white' }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#FF4B91' }}>
        Дарах
      </Button>
      
    </Box>
    
    
  );
};

QuoteForm.propTypes = {
  onQuoteCreated: PropTypes.func.isRequired,
};

export default QuoteForm;
