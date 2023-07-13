import { styled } from '../styled-system/jsx';
import { Positioned, Space } from '#/atoms';
import { Flex, Text } from '#/atoms';
import Background from '#/atoms/Background';
import { Padding } from '#/atoms/Padding';
import { SectionContainer } from '#/components/SectionContainer';
import { css } from '../styled-system/css';
import { Navigation } from '#/components/Navigation';
import { HeroHighlightIntro } from '#/components/HeroHighlightIntro';
import { ScrollIndicator } from '#/components/ScrollIndicator/ScrollIndicator';
import ProjectHighlightCard from '#/components/ProjectHighlightCard/ProjectHighlightCard';
import { ViewportSpotlight } from '#/atoms/ViewportSpotlight';

export default function Home() {
  return (
    <>
      <Flex
        flexDirection='column'
        css={{ position: 'relative', height: '100vh' }}
      >
        <Positioned pos='relative' css={{ minHeight: '100%' }}>
          <Padding p='24px' css={{ height: '100%' }}>
            {/* @todo make background absolute so content can also flow above the bg cover ? */}
            <Background
              bg='bg-color-secondary'
              rounded='16px'
              css={{ height: '100%' }}
            >
              <SectionContainer css={{ height: '100%', pos: 'relative' }}>
                {/* looks like I dont need flex, just the height */}
                <Flex flexDirection='column' css={{ height: '100%' }}>
                  <Space />
                  <Navigation />
                  <styled.div height='15vh' />
                  <HeroHighlightIntro />
                </Flex>
                {/* @todo 68px is pageContents padding should be a token */}
                <Positioned left='auto' top='auto' right='68px' bottom='-14px'>
                  <ScrollIndicator />
                </Positioned>
              </SectionContainer>
            </Background>
          </Padding>
        </Positioned>
      </Flex>
      <SectionContainer css={{ height: '100%', pos: 'relative' }}>
        <ViewportSpotlight>
          <ProjectHighlightCard
            caption='Latest Work'
            title='Modular Personal Website'
            description='A personal website with a profile in a social network fashion. It is built using Next.js so it can be extended into anything. Features include theming support with dark mode functionality and more.'
            projectUrl='https://www.google.com'
            imageUrl='https://placeholder.com/150'
          />
        </ViewportSpotlight>
      </SectionContainer>
      {/* see if you need to wrap flex, move this outside and use height instead of minHeight */}
      {/* <Padding p='24px'>
        <div>woot</div>
      </Padding> */}
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
