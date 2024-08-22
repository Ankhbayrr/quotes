import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button, Paper } from '@mui/material';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quotes/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontSize: '2.5rem' ,textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',}}>
        Random Quote
      </Typography>
      {quote ? (
        <Paper elevation={3} sx={{ padding: '2rem', display: 'inline-block', marginBottom: '1rem' }}>
          <Typography variant="body1" sx={{ wordWrap: 'break-word', wordBreak: 'break-word', mb: 2, fontSize: '1.25rem' }}>
            {quote.text}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ fontSize: '1rem' }}>
            - {quote.author}
          </Typography>
        </Paper>
      ) : (
        <Typography>Loading...</Typography>
      )}
      <div  style={{ marginTop: 'auto' }}>
        <Button variant="contained" color="secondary" onClick={fetchRandomQuote} sx={{backgroundColor: "#FF4B91"}}>
          Солих
        </Button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <img 
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/454583820_2652942568240685_4691346300956751640_n.png?stp=dst-png_s261x260&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OquzHfQDLWAQ7kNvgEogaDr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHbdTUkWxUk3RoERvl2e9Sx377XeRrYv47FIpnlQKXkeg&oe=66EF1ACC" 
          alt="Bottom Image" 
          style={{ width: '258px', height: 'auto' }} 
        />
      </div>
    </div>
  );
};

export default RandomQuote;
