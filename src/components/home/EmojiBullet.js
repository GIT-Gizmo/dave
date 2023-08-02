<<<<<<< HEAD
import React from 'react';
import { Box } from '@mui/material';

function EmojiBullet(props) {
  const { emoji, text } = props;

  return (
    <Box
      component={'li'}
      fontSize={'1rem'}
      lineHeight={1.5}
      style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}
    >
      <Box
        component={'span'}
        aria-label="cheese"
        role="img"
        mr={{ xs: '0.5rem', md: '1rem' }}
        fontSize={'1.5rem'}
      >
        {emoji}
      </Box>{' '}
      {text}
    </Box>
  );
}

export default EmojiBullet;
=======
import React from 'react';
import { Box } from '@mui/material';

function EmojiBullet(props) {
  const { emoji, text } = props;

  return (
    <Box
      component={'li'}
      fontSize={'1rem'}
      lineHeight={1.5}
      style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}
    >
      <Box
        component={'span'}
        aria-label="cheese"
        role="img"
        mr={{ xs: '0.5rem', md: '1rem' }}
        fontSize={'1.5rem'}
      >
        {emoji}
      </Box>{' '}
      {text}
    </Box>
  );
}

export default EmojiBullet;
>>>>>>> 3f642e61df24c30281ad2c416b0c24c3cfe06e12
