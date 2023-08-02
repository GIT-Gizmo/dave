<<<<<<< HEAD
import React from 'react';
import { Box } from '@mui/material';

export default function Toggler({ darkMode, handleClick }) {
  const transition = 'all 250ms ease';

  return (
    <Box
      fontSize={'1.5rem'}
      sx={{
        cursor: 'pointer',
        ':hover': { transform: 'translateY(-3px)', transition: transition },
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </Box>
  );
}
=======
import React from 'react';
import { Box } from '@mui/material';

export default function Toggler({ darkMode, handleClick }) {
  const transition = 'all 250ms ease';

  return (
    <Box
      fontSize={'1.5rem'}
      sx={{
        cursor: 'pointer',
        ':hover': { transform: 'translateY(-3px)', transition: transition },
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </Box>
  );
}
>>>>>>> 3f642e61df24c30281ad2c416b0c24c3cfe06e12
