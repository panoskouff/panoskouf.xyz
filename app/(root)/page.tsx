import { Space } from '#/atoms';
import { ProjectHighlightCard } from '#/components/ProjectHighlightCard';
import { SectionContainer } from '#/components/SectionContainer';

export default function HomeContent() {
  return (
    <SectionContainer css={{ pos: 'relative' }}>
      <Space h='sp-lg' />
      <Space h='sp-xl' />
      {/* @todo replace viewport spotlights with xxxl spacings */}
      <ProjectHighlightCard
        kicker='Latest Work'
        title='Modular Personal Website'
        description='A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.'
        projectUrl='https://www.google.com'
        imageUrl='https://placeholder.com/150'
      />
      <Space h='sp-xl' />
      <Space h='sp-xl' />
      <ProjectHighlightCard
        kicker='Latest Work'
        title='Modular Personal Website'
        description='A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.'
        projectUrl='https://www.google.com'
        imageUrl='https://placeholder.com/150'
      />
    </SectionContainer>
  );
}
