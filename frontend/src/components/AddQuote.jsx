
import QuoteForm from '../components/QuoteForm';
import { Typography, Container } from '@mui/material';

const AddQuote = () => {
  // Define a function to handle the new quote
  const handleQuoteCreated = (newQuote) => {
    console.log('New quote created:', newQuote);
    // You can perform additional actions here, like updating local state or making API calls
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add a New Quote
      </Typography>
      {/* Pass the function as a prop to QuoteForm */}
      <QuoteForm onQuoteCreated={handleQuoteCreated} />
      <div style={{ marginTop: '1rem' }}>
        <img 
          src="https://i.pinimg.com/736x/3b/e4/a2/3be4a2d5b65cb06ea71e0a2c5a26bc9f.jpg" 
          alt="Bottom Image" 
          style={{ width: '258px', height: 'auto' }} 
        />
      </div>
    </Container>
  );
};

export default AddQuote;
