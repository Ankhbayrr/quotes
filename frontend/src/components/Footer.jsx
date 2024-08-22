// src/components/Footer.js


import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <Box
      sx={{
        
        backgroundColor: 'white',
       
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
      Contact us to remove your quote
      </Typography>
      <Box>
        <IconButton
          color="inherit"
          href="https://www.facebook.com/anhbayrrrr/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          sx={{
            '&:hover': {
              backgroundColor: '#3b5998', // Facebook blue color on hover
              color: 'white', // Change icon color on hover
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
       
        <IconButton
          color="inherit"
          href="https://www.instagram.com/anhbayrrrr/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{
            '&:hover': {
              backgroundColor: '#C13584', // Instagram pink color on hover
              color: 'white', // Change icon color on hover
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
      
      </Box>
      
    </Box>
  );
};

export default Footer;
