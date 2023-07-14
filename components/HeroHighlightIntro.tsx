import { ButtonLink, Space, Text } from '#/atoms';
import Link from 'next/link';

export const HeroHighlightIntro = () => (
  <>
    <Text as='h1' variant='title'>
      Hi, I’m Panos,
      <br />
      Front End Engineer
    </Text>
    <Space h='sp-sm' />
    <Text as='p' variant='body' style={{ maxWidth: 600 }}>
      I love everything TypeScript. Besides front end development, I am
      interested in Node.js, Ionic and BaaS. My favorite framework is React.
    </Text>
    <Space h='sp-xs' />
    <Space />
    <ButtonLink>see my work</ButtonLink>
  </>
);
