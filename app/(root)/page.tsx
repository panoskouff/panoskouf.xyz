import { styled } from '../../styled-system/jsx';
import { Positioned, Space } from '#/atoms';
import { Flex, Text } from '#/atoms';
import { Background } from '#/atoms';
import { Padding } from '#/atoms/Padding';
import { SectionContainer } from '#/components/SectionContainer';
import { css } from '../../styled-system/css';
import { Navigation } from '#/components/Navigation';
import { HeroHighlightIntro } from '#/components/HeroHighlightIntro';
import { ScrollIndicator } from '#/components/ScrollIndicator/ScrollIndicator';
import { ProjectHighlightCard } from '#/components/ProjectHighlightCard';
import { ViewportSpotlight } from '#/atoms/ViewportSpotlight';
import { Footer } from '#/components/Footer';

export default function Home() {
  return (
    <>
      <Flex flexDirection='column' css={{ pos: 'relative', h: '100vh' }}>
        <Positioned pos='absolute' css={{ h: '100vh', zIndex: -1 }}>
          <Padding p='24px' css={{ h: '100%' }}>
            <Background
              bg='bg-color-secondary'
              rounded='16px'
              css={{ h: '100%' }}
            />
          </Padding>
        </Positioned>
        {/* height in SectionContainer and Positioned element
          needed to be used as offset parent for ScrollIndicator */}
        <SectionContainer css={{ h: '100%' }}>
          <Positioned pos='relative' css={{ h: '100%' }}>
            <Space h='48px' />
            <Navigation />
            <styled.div h='15vh' />
            <HeroHighlightIntro />
            <Positioned left='auto' top='auto' right='0' bottom='12px'>
              <ScrollIndicator />
            </Positioned>
          </Positioned>
        </SectionContainer>
      </Flex>
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
      <Space h='sp-xl' />
      <Footer />
    </>
  );
}

/*
<HeightBasedExpansion>
<ContentBasedExpansion>
</ContentBasedExpansion>
</expanded>

either follow approach above

or have a set of components
like <Padding p='24px' css={{ height: '100%' }}>
with a proper name eg insetSpace or expandedOutline
or sth like that
*/
