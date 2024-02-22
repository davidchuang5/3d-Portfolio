import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  car,
  contact,
  css,
  docker,
  estate,
  express,
  flask,
  git,
  github,
  graphql,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  python,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  postgresql,
  webcomponents,
  DockerPulse,
  ramen,
  Tabloid,
  play,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: python,
    name: 'python',
    type: 'Backend',
  },
  {
    imageUrl: flask,
    name: 'flask',
    type: 'Backend',
  },

  {
    imageUrl: graphql,
    name: 'graphql',
    type: 'Database',
  },
  {
    imageUrl: webcomponents,
    name: 'webcomponents',
    type: 'Frontend',
  },

  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Containers',
  },

  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },

  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: DockerPulse,
    theme: 'btn-back-yellow',
    name: 'ContainerWatch',
    description:
      'Developed a Docker Desktop Extension with small team of 4. Monitoring tools for Docker: metrics visualization (up to 3 days), log aggregation and filtering, and alerts.',
    link: 'https://hub.docker.com/extensions/containerwatch/containerwatch',
  },
  {
    iconUrl: ramen,
    theme: 'btn-back-green',
    name: 'Leftovers',
    description:
      "Overwhelmed with leftover ingredients? Don't know what to cook? With Leftovers, simply type the ingredients you have in your fridge, and get real recipes you can cook right away. Leftovers also allows you to search for recipes you wish to make, without having to type the ingredients out. It's one simple search bar with endless possibilites. Enjoy!",
    link: 'https://github.com/davidchuang5/LeftOvers',
  },
  {
    iconUrl: Tabloid,
    theme: 'btn-back-blue',
    name: 'Tabloid',
    description:
      'A lightweight, google chrome extension offering note taking for all your chrome tabs. Notes are tied to the URL of the active tab and saved directly to the browser. Tabloid offers data persistence across unlimited tabs and unlimited windows- keeping the web and your notes all in one place.',
    link: 'https://github.com/davidchuang5/Tabloid',
  },
  {
    iconUrl: play,
    theme: 'btn-back-red',
    name: 'UX Best Practices Public Talk',
    description: 'My public talk on UX best practices for developers.',
    link: 'https://drive.google.com/file/d/1dqB0IJHlFVO__yHobA9wUsBNGZWrbVXk/view?usp=sharing',
  },
];
