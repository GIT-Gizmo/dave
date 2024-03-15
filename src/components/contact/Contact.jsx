import React from 'react';
import Terminal from '../about/Terminal';
import Style from './Contact.module.scss';
import { Box } from '@mui/material';

export default function Contact() {

  const contact = () => {
    return (
      <>
        <section>
            <div>

                <div>

                    <h2 className="heading">Let's <span className={Style.gradient}>Get in Touch.</span></h2>

                    <p>Feel free to email me. I'm available to collaborate on impactful projects and talk about everything relating to Tech.</p>
                </div>

                <a href="mailto:davidbolu12@gmail.com" className={Style.button}>Say Hello</a>
            </div>
        </section>
      </>
    );
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
      <Terminal text={contact()} />
    </Box>
  );
}
