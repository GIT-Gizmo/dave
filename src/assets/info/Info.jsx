import self from '../img/self.webp';
import adroit from '../img/adroit.webp';
import aistitches from '../img/ai-stitches.webp';
import promptSynth from '../img/promptsynth.webp';
import anime from "../img/anime_crypt.webp"
import homeSeekr from '../img/home-seekr.webp';
import ehazypay from '../img/ehazypay.webp';
import littleLemon from '../img/little-lemon.webp';
import honeybiis from '../img/honeybiis.webp';
import wingsTrip from '../img/wingstrip.webp';
import glamourThreads from '../img/glamour-threads.webp';
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
      text: 'Software Engineer | Web 3.0 Enthusiast',
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
      link: 'https://twitter.com/dave_gizmo',
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
  bio: <><p>Hello!, I'm Boluwatife David. A Full-Stack Engineer with a unique journey transitioning to software development. My background in demography fueled my analytical skills, which I now combine with expertise in React, Next.js, Node.js, and PHP to create cool web apps and robust systems.</p><p>Self-driven learning landed me my first freelance gig within 11 months, followed by internship role at Swap Space and contract role Adroit Handyman Services. At Adroit, I revamped the entire website which boosted server response time by 65% and user engagement by 20% and I'm constantly pushing boundaries with innovative solutions.</p><p>Beyond coding, I'm fascinated by Web 3.0's potential to improve user privacy and personalize experiences. Let's explore how I can bring your vision to life!</p>
  </>,
  skills: {
    // frontEnd: ['Reactjs', 'Nextjs', 'Html/Css', 'JavaScript', 'Typescript', 'Tailwind', 'Framer Motion', 'Material ui', 'Sass', 'Bootstrap'],
    // backEnd: ['Nodejs', 'Expressjs', 'MongoDb', 'REST api', 'Php', 'Python', 'Firebase', 'Google Cloud'],
    // developmentTools: [ 'Git', 'Vite', 'Vercel', 'Netlify', 'Npm', 'Jest', 'Figma', 'CPanel'],
    // learning: [ 'web 3.0', 'solidity'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML5', 'CSS3'],
    librariesAndFrameworks: ['React.js', 'Next.js', 'Express.js', 'Tailwind', 'Bootstrap', 'Three.js', 'Material UI', 'Framer Motion', 'ShadCn UI'],
    databaseAndBackend: ['MongoDb', 'Nodejs',  'Firebase', 'REST API'],
    cloudServices: ['Google Cloud', 'Firebase', 'Vercel', 'Netlify'],
    tools: ['Git', 'Npm', 'Postman', 'Vite', 'Jest', 'Cpanel', 'Payload CMS', 'Figma'],
  },
  hobbies: [
    {
      label: 'Chess',
      emoji: '♟️',
    },
    {
      label: 'Dancing',
      emoji: '🕺',
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
      label: 'Mystery Novels',
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
      detail: 'Prompt Synth is a full-stack web app that empowers users to share and explore powerful AI prompts.  Imagine a collaborative hub where you can discover new prompts for creative text generation, code completion, or image creation with artificial intelligence.',
      stack: 'Nextjs, Tailwind, MongoDb, Next Auth',
      live: 'https://promptsynth.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/promptsynth', // this should be a link to the **repository** of the project, where the code is hosted.
      image: promptSynth,
    },
    {
      title: 'AI Stitches',
      detail: 'Design your dream T-shirt with AI Stitches! This web app lets you unleash your creativity with a fully customizable 3D T-shirt model. Upload your own logos and textures, or get inspired with AI-generated designs.',
      stack: 'React, Threejs, Image AI, Express, Tailwind',
      live: 'https://ai-stitches.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/ai-stitches', // this should be a link to the **repository** of the project, where the code is hosted.
      image: aistitches,
    },
    {
      title: 'Adroit Handyman',
      detail: 'A complete website revamp for Adroit Handyman Services leveraging Next.js and its Server-Side Rendering (SSR) capabilities for a significant 65% reduction in server response times, resulting in a noticeable increase in user engagement and sales for the company. Additionally, Tailwind CSS was used for a modern and responsive design.',
      stack: 'Nextjs, Expressjs, Shadcn UI, Tailwind',
      live: 'https://www.adroithandymanservices.com', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      // source: 'https://github.com/GIT-Gizmo/adroit', // this should be a link to the **repository** of the project, where the code is hosted.
      image: adroit,
    },
    {
      title: 'Anime Crypt',
      detail: 'Deepened my understanding of server-side rendering with Next.js by building a dynamic anime list application. Explored the power of TypeScript for type safety and Framer Motion for smooth animations.',
      stack: 'Nextjs, TypeScript, Framer motion, Tailwind',
      live: 'https://anime-crypt.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/anime-crypt', // this should be a link to the **repository** of the project, where the code is hosted.
      image: anime,
    },
    {
      title: 'Home Seekr',
      detail: 'This project served as a learning experience for building CRUD web applications with user sign-in & sign-up authentication. Developed with React and Firebase, it showcases my ability to create interactive data-driven applications with secure user access.',
      stack: 'React, Tailwind, Firebase',
      live: 'https://home-seekr.vercel.app/sign-in', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/home-seekr', // this should be a link to the **repository** of the project, where the code is hosted.
      image: homeSeekr,
    },
    {
      title: 'WingsTrip',
      detail: 'I explored building interactive elements using React to create a captivating landing page. The project served as a playground to solidify my understanding of Sass for styling and component management.',
      stack: 'React, Sass, Aos',
      live: 'https://wingstrip.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/Wings-Trip', // this should be a link to the **repository** of the project, where the code is hosted.
      image: wingsTrip,
    },
    {
      title: 'Ehazypay',
      detail: 'This contract project involved building and managing a user-friendly single-page website for a trusted cryptocurrency vendor. The website simplifies the process for customers to directly buy and sell cryptocurrencies, enhancing their experience and accessibility.',
      stack: 'Html, Css, Bootstrap, jQuery',
      live: 'https://ehazypay.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      // source: 'https://github.com/GIT-Gizmo/ehazypay', // this should be a link to the **repository** of the project, where the code is hosted.
      image: ehazypay,
    },
    {
      title: 'Little Lemon',
      detail: 'This capstone project for the META Frontend Developer Specialization (Coursera) challenged me to build a full-fledged restaurant web app where customers can reserve tables, showcasing my skills in React, user interface design, and front-end development best practices.',
      stack: 'React.js, Toastify, Formik',
      live: 'https://little-lemon-portfolio.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/little-lemon-portfolio', // this should be a link to the **repository** of the project, where the code is hosted.
      image: littleLemon,
    },
    {
      title: 'Honeybiis',
      detail: 'Landing my first freelance gig, I created a visually compelling landing page for an online restaurant. This project allowed me to collaborate with a client and translate their vision into a design that drives customer engagement.',
      stack: 'Html, Sass',
      live: 'https://honeybiis.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/honeybiis', // this should be a link to the **repository** of the project, where the code is hosted.
      image: honeybiis,
    },
    {
      title: 'Glamour Threads',
      detail: 'Demonstrating my newfound skills in SASS/SCSS, I created a stylish and functional landing page template tailored for online clothing stores. The project emphasizes clear product presentation and navigation to enhance the user experience.',
      stack: 'Html, Sass',
      live: 'https://glamour-threads.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/glamour-threads', // this should be a link to the **repository** of the project, where the code is hosted.
      image: glamourThreads,
    }
  ],
};
