/* temporary data until we move to a headless CMS */
import { Project } from '../../types/data'
import { HeroHighlight } from '#/types/data'
import { TrustedHtmlString } from '#/types'

export const homeHero: HeroHighlight = {
  title: `Hi, I’m Panos<br />Front End Engineer` as TrustedHtmlString,
  description:
    'I love everything TypeScript. Besides front end development, I am interested in Node.js and BaaS. My favorite framework is React.' as TrustedHtmlString,
  cta: 'see my work',
  ctaUrl: '#Portfolio',
}

const tags = {
  react: { id: 'react', text: 'React' },
  next_js: { id: 'nextjs', text: 'Next.js' },
  next_auth: { id: 'nextAuth', text: 'next-auth' },
  typescript: { id: 'typescript', text: 'TypeScript' },
  cra: { id: 'cra', text: 'CRA' },
  redux: { id: 'redux', text: 'Redux' },
  server_components: {
    id: 'servercomponents',
    text: 'React Server Components',
  },
  chrome_extension: { id: 'chromeextension', text: 'Chrome Extension' },
  markdown: { id: 'markdown', text: 'Markdown' },
  panda_css: { id: 'pandaCss', text: 'panda-css' },
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
    // @todo update content here
    ...projectRequiredDefaults,
    ...projectOptionalDefaults,
    slug: 'react-polygons',
    title: 'A polygons drawing App',
    description: '@todo',
    projectUrl: '@todo',
    githubUrl: '@todo',
    cardImageUrl: '/images/projects/portfolio-website-800.jpeg',
    tags: [
      tags.react,
      tags.typescript,
      tags.next_auth,
      tags.next_js,
      tags.panda_css,
      tags.server_components,
    ],
    image: {
      src: '/images/projects/portfolio/portfolio-website-showcase-p-1600.jpeg',
      width: 1600,
      height: 2078,
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
      'This website. Built using Next.js, Server Components and panda-css. Feel free to take a look at the source code!',
    projectUrl: 'https://panoskouf.xyz/',
    githubUrl: 'https://github.com/panoskouff/panoskouf.xyz',
    cardImageUrl: '/images/projects/portfolio-website-800.jpeg',
    tags: [
      tags.react,
      tags.typescript,
      tags.next_js,
      tags.panda_css,
      tags.server_components,
    ],
    image: {
      src: '/images/projects/portfolio/portfolio-website-showcase-p-1600.jpeg',
      width: 1600,
      height: 2078,
    },
  },
  {
    ...projectRequiredDefaults,
    ...projectOptionalDefaults,
    // old slug spa-hippalus-ui.html
    slug: 'hippalus',
    title: 'Graphical User Interface',
    description:
      "This is my Bachelor's Thesis, A Web-based Graphical User Interface implementation for the Hippalus Exploratory Search System. A UI reimplementation for the Hippalus Exploratory Search System as a single page application written from scratch.",
    projectUrl: 'https://my-thesis.vercel.app/dataset/2',
    cardImageUrl: '/images/projects/thesis-showcase-home-800.jpeg',
    tags: [tags.react, tags.cra, tags.redux],
    image: {
      src: '/images/projects/spa-hippalus/thesis-showcase-1.jpg',
      width: 1440,
      height: 5873,
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
    cardImageUrl: '/images/projects/mdcopy-showcase-home-800.jpeg',
    tags: [tags.chrome_extension, tags.markdown],
    image: {
      src: '/images/projects/mdcopy/mdcopy-showcase-1.png',
      width: 1337,
      height: 1381,
    },
  },
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
    cardImageUrl: '/images/projects/personal-website-800.jpeg',
    tags: [tags.react, tags.typescript, tags.next_js],
    image: {
      src: '/images/projects/personal-website/personal-website-showcase.jpg',
      width: 1404,
      height: 4316,
    },
  },
]
