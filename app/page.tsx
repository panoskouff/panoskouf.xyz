import s from './page.module.css';

// @todo fix imports
import { ButtonLink, Space, Text } from '#/atoms';
import { Navigation } from '#/components/Navigation/Navigation';
import { ScrollIndicator } from '#/components/ScrollIndicator/ScrollIndicator';
import ProjectHighlightCard from '#/components/ProjectHighlightCard/ProjectHighlightCard';

const expanded = { height: '100%' };

// @move most of this to the layout
export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.bgViewportCover} />
      <div className={s.sectionWrapper}>
        <div className={s.section}>
          <div className={s.spaceTopOffset} />
          <Space />
          <Navigation />
        </div>
      </div>
      <div className={s.sectionWrapper} style={expanded}>
        <div className={s.section} style={expanded}>
          <div className={s.hero} style={expanded}>
            <div className={s.heroContent}>
              <div style={{ height: '15vh' }} />
              <Text as='h1' variant='title'>
                Hi, I’m Panos,
                <br />
                Front End Engineer
              </Text>
              <Space sp='sm' />
              <Text as='p' variant='body' style={{ maxWidth: 600 }}>
                I love everything TypeScript. Besides front end development, I
                am interested in Node.js, Ionic and BaaS. My favorite framework
                is React.
              </Text>
              <Space sp='xs' />
              <Space />
              <ButtonLink>see my work</ButtonLink>
            </div>
          </div>
          <div className={s.positionForScrollIndicator}>
            <ScrollIndicator />
          </div>
        </div>
        <div className={s.section}>
          <ProjectHighlightCard
            caption='Latest Work'
            title='Modular Personal Website'
            description='A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.'
            projectUrl='https://www.google.com'
            imageUrl='https://placeholder.com/150'
          />
        </div>
      </div>
    </div>
  );
}
