import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: ' Boluwatife',
  lastName: 'David',
  initials: 'BD', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Frontend developer',
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
      text: 'Front-End Developer | UI/UX',
    },
    {
      emoji: '🤝',
      text: "Let's join forces and create web magic!",
    },
    {
      emoji: '📨',
      text: <a href="mailto:davidbolu12@gmail.com?subject=🤘 Hi Dave, I will like to hire you">Davidbolu12@gmail.com</a>,
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
  bio: "Hello! I'm Boluwatife David, a dynamic Frontend developer transitioning to Full Stack soon. I enjoy learning new technologies and trying out new Frontend tools. I recently started contributing to open source projects and it's practically my new hobby. I'm available to collaborate on impactful projects",
  skills: {
    mainStack: ['Reactjs', 'Nextjs', 'Tailwind CSS', 'Vite', 'Git', 'Vercel', 'APIs', 'Firebase'],
    otherSkills: ['Html/Css', 'JavaScript', 'Typescript','Mongodb', 'Material ui', 'Bootstrap', 'JQuery', 'Chakra ui', 'Netlify', 'Google Cloud', 'Redux', 'Npm', 'Jest', 'Figma', 'Sass', 'Php', 'Wordpress', 'Wix'],
    /*database: [ 'Supabase', ],
  tools: [ 'Cypress'], 
    cms: [],*/
    interests: ['Nodejs', 'Expressjs', 'Nestjs', 'Graphql', 'Rest api', 'Python', 'React native']
  },
  hobbies: [
    {
      label: 'Coding',
      emoji: '🧑‍💻',
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
      label: 'Solving coding challenge',
      emoji: '🛠️',
    },
    {
      label: 'Taking a walk',
      emoji: '🚶',
    },
    {
      label: 'Dancing',
      emoji: '🕺',
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'PromptSynth',
      detail: 'Prompt Synth is a platform for sharing and exploring powerful AI prompts.Built with the robust full-stack capabilities of Next.js and MongoDB, beautifully styled with Tailwind CSS. ',
      stack: 'Html, Css, Bootstrap, jQuery',
      live: 'https://promptsynth.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/promptsynth', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/eaba80346d6a95e5b8a6b0a1448c9c4b.png',
    },
    {
      title: 'WingsTrip',
      detail: 'A beautiful react template. Embark on your dream vacation with Wings Trip! Easily book your ideal flights and set off on unforgettable journeys to your favorite destinations.',
      stack: 'React, Sass, Aos',
      live: 'https://wingstrip.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/Wings-Trip', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/46b46ffdc141dc81e2d1cf115b947c0a.jpg',
    },
    {
      title: 'Ehazypay',
      detail: 'Ehazypay is a single page platform that gives you easy access to trade your cryptocurrencies directly with trusted vendors.',
      stack: 'Html, Css, Bootstrap, jQuery',
      live: 'https://ehazypay.com.ng', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
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
      detail: 'An attractive lnading page template for an online clothing store.',
      stack: 'Html, Sass',
      live: 'https://glamour-threads.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/glamour-threads', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.gyazo.com/d4beecb546f743ee1f6a6a021f25295b.png',
    }
  ],
};
