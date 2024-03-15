import self from '../img/self.png';
import adroit from '../img/adroit.png'
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: ' Boluwatife',
  lastName: 'David',
  initials: 'BD', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Engineer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    // {
    //   emoji: '👦 ',
    //   text: 'you can call me dave',
    // },
    {
      emoji: '🇳🇬 ',
      text: ' Based in Lagos, Nigeria',
    },
    {
      emoji: '👨‍💻',
      text: 'Software Engineer | Web 3.0',
    },
    {
      emoji: '🤝',
      text: "Let's join forces and create web magic!",
    },
    {
      emoji: '📨',
      text: <a href="mailto:davidbolu12@gmail.com?subject=🤘 Hi Dave, I will like to hire you">Send me a mail</a>,
    },
  ],
  socials: [
    {
      link: 'https://dave-dev.vercel.app/resume.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file-pdf-o',
      label: 'resume',
    },
    {
      link: 'https://twitter.com/davecodes2',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    {
      link: 'https://github.com/GIT-Gizmo',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/boluwatife-david/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://t.me/dave_gizmo',
      icon: 'fa fa-telegram',
      label: 'telegram',
    },
  ],
  bio: "I'm Boluwatife, a passionate full-stack engineer with a unique journey. My background in demography fueled my analytical thinking and problem-solving skills. But my hunger for crafting impactful experiences led me to transition to web development in 2021. Through self-driven learning, I mastered front-end technologies and landed my first freelance gig within 11 months. This kickstarted my career, leading me to SwapSpace as a front-end developer. Now, as a full-stack engineer at Adroit Handyman Services, I leverage both front-end and back-end expertise to create engaging user interfaces and robust systems. My efforts have driven a 40% increase in sales and user engagement, and I'm constantly pushing boundaries with innovative solutions.",
  skills: {
    frontEnd: ['Reactjs', 'Nextjs', 'JavaScript', 'Typescript', 'Tailwind CSS', 'Vite', 'Material ui', 'Chakra ui', 'Sass', 'Bootstrap', 'Html/Css', 'JQuery',],
    backEnd: [ 'Nodejs', 'Expressjs', 'MongoDb', 'REST api', 'Php', 'Python', 'Firebase', 'Ejs', ],
    developmentTools: [ 'Git', 'Vite', 'Vercel', 'Netlify', 'Google Cloud', 'Redux', 'Npm', 'Jest', 'Figma', 'CPanel', 'Wordpress', 'Wix'],
    /*
  tools: [ 'Cypress'], 
    cms: [],*/
    // interests: ['Graphql',]
  },
  hobbies: [
    {
      label: 'Coding',
      emoji: '🧑‍💻',
    },
    {
      label: 'Dancing',
      emoji: '🕺',
    },
    {
      label: 'Solving problems',
      emoji: '🛠️',
    },
    {
      label: 'Video games',
      emoji: '🎮',
    },
    {
      label: 'Watching movies',
      emoji: '🍿',
    },
    {
      label: 'Reading',
      emoji: '📖',
    },
    {
      label: 'Taking walks',
      emoji: '🚶',
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'PromptSynth',
      detail: 'Prompt Synth is a web app for sharing and exploring powerful AI prompts. Built with the robust full-stack capabilities of Next.js and MongoDB, beautifully styled with Tailwind CSS.',
      stack: 'Html, Css, Bootstrap, jQuery',
      live: 'https://promptsynth.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/promptsynth', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/eaba80346d6a95e5b8a6b0a1448c9c4b.png',
    },
    {
      title: 'Adroit Handyman',
      detail: ': A company website for Adroit Handyman Services where users booking professional Handymen for different services. ',
      stack: 'Nextjs, Nodejs, Shadcn UI, Tailwind CSS',
      live: 'https://www.adroithandymanservices.com', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/promptsynth', // this should be a link to the **repository** of the project, where the code is hosted.
      image: adroit,
    },
    {
      title: 'WingsTrip',
      detail: 'A beautiful landing page template. Embark on your dream vacation with Wings Trip! Easily book your ideal flights and set off on unforgettable journeys to your favorite destinations.',
      stack: 'React, Sass, Aos',
      live: 'https://wingstrip.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/Wings-Trip', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/46b46ffdc141dc81e2d1cf115b947c0a.jpg',
    },
    {
      title: 'Ehazypay',
      detail: 'Ehazypay is a single page platform that gives you easy access to trade your cryptocurrencies directly with trusted vendors.',
      stack: 'Html, Css, Bootstrap, jQuery',
      live: 'https://ehazypay.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/ehazypay', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/1bf1cbf1ea795ec74aa2e4e0ae5ca54a.png',
    },
    {
      title: 'Little Lemon',
      detail: 'A user-friendly restaurant web app for making table reservations and ordering foods online.',
      stack: 'React.js, Toastify, Formik',
      live: 'https://little-lemon-portfolio.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/little-lemon-portfolio', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/b6af183e10a965acff34cecede83e6ba.png',
    },
    {
      title: 'Honeybiis',
      detail: 'An aesthetically pleasing landing page template for ordering food from an online restaurant.',
      stack: 'Html, Sass',
      live: 'https://honeybiis.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/honeybiis', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/13f8b3e31e88d14f81391f70e7bd57a7.jpg',
    },
    {
      title: 'Glamour Threads',
      detail: 'An attractive landing page template for an online clothing store.',
      stack: 'Html, Sass',
      live: 'https://glamour-threads.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/glamour-threads', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/d4beecb546f743ee1f6a6a021f25295b.png',
    }
  ],
};
