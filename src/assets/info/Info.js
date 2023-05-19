import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: ' Boluwatife',
  lastName: 'David',
  initials: 'BD', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a junior frontend developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '👦 ',
      text: 'you can call me dave',
    },
    {
      emoji: '🇳🇬 ',
      text: ' based in Lagos, Nigeria',
    },
    {
      emoji: '👨‍💻',
      text: 'front-end Developer | UI/UX',
    },,
    {
      emoji: '🤝',
      text: "let's join forces and create web magic!",
    },
    {
      emoji: '📨',
      text: <a href="mailto:davidbolu12@gmail.com?subject=🤘 Hi Dave, I will like to hire you">davidbolu12@gmail.com</a>,
    },
  ],
  socials: [
    {
      link: 'https://resume-git-gizmo.vercel.app/', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-user-circle',
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
      link: 'https://linkedin.com/in/boluwatife-david-b73354ab/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://t.me/dave_gizmo',
      icon: 'fa fa-telegram',
      label: 'telegram',
    },
  ],
  bio: "Hi there! I'm Boluwatife David, a highly motivated frontend developer with an ardor for creating delightful user experiences with code. Balancing a healthy lifestyle with coding, I find inspiration in exploring new technologies and enjoy coding. When i'm not coding you can find me playing games, taking a walk, watching animes/movies, dancing or reading books. With a strong eye for detail, I strive to bring creativity and functionality to every project. Let's wield our coding wands and conjure up digital experiences that'll make netizens shed tears of joy!",
  skills: {
    techstack: ['html/css', 'javaScript bootstrap', 'reactjs', 'jQuery', 'sass'],
    reinforcements: ['git', 'npm', 'redux', 'firebase', 'vercel', 'material ui', 'chakra ui', 'wordpress']
  },
  hobbies: [
    {
      label: 'coding',
      emoji: '🧑‍💻',
    },
    {
      label: 'video games',
      emoji: '🎮',
    },
    {
      label: ' movies',
      emoji: '🎞',
    },
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'taking a walk',
      emoji: '🚶',
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Ehazypay',
      live: 'https://ehazypay.com.ng', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/ehazypay', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://dave-dev.vercel.app/assets/img/ehazypay.png',
    },
    {
      title: 'Little Lemon',
      live: 'https://little-lemon-portfolio.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/little-lemon-portfolio', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://dave-dev.vercel.app/assets/img/little-lemon.png',
    },
    {
      title: 'Honeybiis',
      live: 'https://honeybiis.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/honeybiis', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://dave-dev.vercel.app/assets/img/honeybiis.png',
    },
    {
      title: 'Glamour Threads',
      live: 'https://glamour-threads.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/GIT-Gizmo/glamour-threads', // this should be a link to the **repository** of the project, where the code is hosted.
      image: '../img/glamour-threads.png',
    }
  ],
};
