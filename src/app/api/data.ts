/* temporary data until we move to a headless CMS */
import { Project } from '../../types/data'
import { HeroHighlight } from '#/types/data'

export const homeHero: HeroHighlight = {
  title: `Hi, I’m Panos,
  Front End Engineer`,
  // @todo use wbr for line breaks https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
  description: `I love everything TypeScript. Besides front end development, I am
  interested in Node.js, Ionic and BaaS. My favorite framework is React.`,
  cta: 'see my work',
}

const tags = {
  react: { id: 'react', text: 'React' },
  nextjs: { id: 'nextjs', text: 'NextJS' },
  typescript: { id: 'typescript', text: 'TypeScript' },
  cra: { id: 'cra', text: 'CRA' },
  redux: { id: 'redux', text: 'Redux' },
  servercomponents: { id: 'servercomponents', text: 'ServerComponents' },
  chromeextension: { id: 'chromeextension', text: 'Chrome Extension' },
  markdown: { id: 'markdown', text: 'Markdown' },
}

const projectRequiredDefaults = {
  cardCTA: 'see this project',
}

const projectOptionalDefaults: Partial<Project> = {
  kicker: 'Project Showcase',
  projectCTA: 'visit live site →',
}

// @todo add date of when each project was built ? eg "Last updated: 3 years ago"
// @todo redirect old slugs using next middleware
//  - also old slugs had parent project instead of projects
// @todo add data for highlight cards, seo etc
// simplify data depending on fe components
export const projects: Project[] = [
  {
    ...projectRequiredDefaults,
    ...projectOptionalDefaults,
    // personal-website.html
    slug: 'simple-next-website',
    title: 'Simple Personal Website',
    description:
      'A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.',
    projectUrl: 'https://stg-pnsxyz.vercel.app/',
    githubUrl: 'https://github.com/panoskouf/personal-website-nextjs',
    cardImageUrl:
      'https://panoskouf.xyz/images/projects/personal-website-800.jpeg',
    tags: [tags.react, tags.typescript, tags.nextjs],
    image: {
      src: 'https://panoskouf.xyz/images/projects/personal-website/personal-website-showcase.jpg',
      width: 1404,
      height: 4316,
    },
  },
  {
    ...projectRequiredDefaults,
    ...projectOptionalDefaults,
    // old slug spa-hippalus-ui.html
    slug: 'hippalus',
    title: 'Graphical User Interface',
    description:
      'Web-based Graphical User Interface for the Hippalus Exploratory Search System. A UI reimplementation for the Hippalus Exploratory Search System as a single page application written from scratch.',
    projectUrl: 'https://my-thesis.vercel.app/dataset/2',
    cardImageUrl:
      'https://panoskouf.xyz/images/projects/thesis-showcase-home-800.jpeg',
    tags: [tags.react, tags.cra, tags.redux],
    image: {
      src: 'https://panoskouf.xyz/images/projects/spa-hippalus/thesis-showcase-1.jpg',
      width: 1440,
      height: 5873,
    },
  },
  {
    // @todo update content here
    ...projectRequiredDefaults,
    ...projectOptionalDefaults,
    // portfolio.html
    slug: 'this-website',
    title: 'This Portfolio Website',
    description:
      'This website using the webflow platform and its cms capabilities. I mainly wanted to check the features, templates and speed development of webflow.',
    projectUrl: 'https://panoskouf.xyz/',
    githubUrl: 'https://github.com/panoskouff/panoskouf.xyz',
    cardImageUrl:
      'https://panoskouf.xyz/images/projects/portfolio-website-800.jpeg',
    tags: [tags.react, tags.typescript, tags.nextjs],
    image: {
      src: 'https://panoskouf.xyz/images/projects/portfolio/portfolio-website-showcase-p-1600.jpeg',
      width: 1600,
      height: 2078,
    },
  },
  {
    ...projectRequiredDefaults,
    ...projectOptionalDefaults,
    // mdcopy.html
    slug: 'mdcopy',
    title: 'mdcopy - Chrome Extension',
    description:
      'Copy the current page link in a markdown or org-mode format to clipboard with title included.',
    projectUrl:
      'https://chrome.google.com/webstore/detail/mdcopy/jphaecfkoakhmnhpgigacoiagmhcpjnb?hl=en',
    githubUrl: 'https://github.com/panoskouf/mdcopy',
    cardImageUrl:
      'https://panoskouf.xyz/images/projects/mdcopy-showcase-home-800.jpeg',
    tags: [tags.chromeextension, tags.markdown],
    image: {
      src: 'https://panoskouf.xyz/images/projects/mdcopy/mdcopy-showcase-1.png',
      width: 1337,
      height: 1381,
    },
  },
]
