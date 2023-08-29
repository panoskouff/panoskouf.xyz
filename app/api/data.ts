/* temporary data until we move to a headless CMS */
import { Project } from '../../types/data';

const projectDefaults: Partial<Project> = {
  kicker: 'Project Showcase',
  projectCTA: 'visit live site →',
};

// @todo add date of when each project was built ? eg "Last updated: 3 years ago"
// @todo redirect old slugs using next middleware
//  - also old slugs had parent project instead of projects
// @todo add data for highlight cards, seo etc
export const projects: Project[] = [
  {
    ...projectDefaults,
    // old slug spa-hippalus-ui.html
    slug: 'hippalus',
    title: 'Graphical User Interface',
    description:
      'Web-based Graphical User Interface for the Hippalus Exploratory Search System. A UI reimplementation for the Hippalus Exploratory Search System as a single page application written from scratch.',
    projectUrl: 'https://my-thesis.vercel.app/dataset/2',
    image: {
      src: 'https://panoskouf.xyz/images/projects/spa-hippalus/thesis-showcase-1.jpg',
      width: 1440,
      height: 5873,
    },
  },
  {
    ...projectDefaults,
    // personal-website.html
    slug: 'simple-next-website',
    title: 'Simple Personal Website',
    description:
      'A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.',
    projectUrl: 'https://stg-pnsxyz.vercel.app/',
    githubUrl: 'https://github.com/panoskouf/personal-website-nextjs',
    image: {
      src: 'https://panoskouf.xyz/images/projects/personal-website/personal-website-showcase.jpg',
      width: 1404,
      height: 4316,
    },
  },
  {
    ...projectDefaults,
    // portfolio.html
    slug: 'this-website',
    title: 'This Portfolio Website',
    description:
      'This website using the webflow platform and its cms capabilities. I mainly wanted to check the features, templates and speed development of webflow.',
    projectUrl: 'https://panoskouf.xyz/',
    githubUrl: 'https://github.com/panoskouff/panoskouf.xyz',
    image: {
      src: 'https://panoskouf.xyz/images/projects/portfolio/portfolio-website-showcase-p-1600.jpeg',
      width: 1600,
      height: 2078,
    },
  },
  {
    ...projectDefaults,
    // mdcopy.html
    slug: 'mdcopy',
    title: 'mdcopy - Chrome Extension',
    description:
      'Copy the current page link in a markdown or org-mode format to clipboard with title included.',
    projectUrl:
      'https://chrome.google.com/webstore/detail/mdcopy/jphaecfkoakhmnhpgigacoiagmhcpjnb?hl=en',
    githubUrl: 'https://github.com/panoskouf/mdcopy',
    image: {
      src: 'https://panoskouf.xyz/images/projects/mdcopy/mdcopy-showcase-1.png',
      width: 1337,
      height: 1381,
    },
  },
];
