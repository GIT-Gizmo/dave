<<<<<<< HEAD
import React from 'react';

function IconLink(props) {
  const { link, title, icon } = props;
  return (
    <a href={link} target={'_blank'} rel="noopener noreferrer">
      <i className={icon} /> {title}
    </a>
  );
}

export default IconLink;
=======
import React from 'react';

function IconLink(props) {
  const { link, title, icon } = props;
  return (
    <a href={link} target={'_blank'} rel="noopener noreferrer">
      <i className={icon} /> {title}
    </a>
  );
}

export default IconLink;
>>>>>>> 3f642e61df24c30281ad2c416b0c24c3cfe06e12
