import { styled } from '../styled-system/jsx';
import { Positioned, Space } from '#/atoms';
import { Flex, Text } from '#/atoms';
import { Background } from '#/atoms';
import { Padding } from '#/atoms/Padding';
import { SectionContainer } from '#/components/SectionContainer';
import { css } from '../styled-system/css';
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
        <Positioned pos='relative' css={{ minH: '100%' }}>
          <Padding p='24px' css={{ h: '100%' }}>
            {/* @todo make background absolute so content can also flow above the bg cover ? */}
            <Background
              bg='bg-color-secondary'
              rounded='16px'
              css={{ h: '100%' }}
            >
              <SectionContainer css={{ h: '100%' }}>
                <Positioned pos='relative' css={{ h: '100%' }}>
                  <Space />
                  <Navigation />
                  <styled.div h='15vh' />
                  <HeroHighlightIntro />
                  <Positioned left='auto' top='auto' right='0' bottom='-14px'>
                    <ScrollIndicator />
                  </Positioned>
                </Positioned>
              </SectionContainer>
            </Background>
          </Padding>
        </Positioned>
      </Flex>
      <SectionContainer css={{ pos: 'relative' }}>
        <ViewportSpotlight css={{ maxHeight: '100vh' }}>
          <ProjectHighlightCard
            caption='Latest Work'
            title='Modular Personal Website'
            description='A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.'
            projectUrl='https://www.google.com'
            imageUrl='https://placeholder.com/150'
          />
        </ViewportSpotlight>
        <ViewportSpotlight css={{ maxHeight: '75vh' }}>
          <ProjectHighlightCard
            caption='Latest Work'
            title='Modular Personal Website'
            description='A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.'
            projectUrl='https://www.google.com'
            imageUrl='https://placeholder.com/150'
          />
        </ViewportSpotlight>
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
