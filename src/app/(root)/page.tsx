import { Position, Flex, Background, Padding, Column, Space } from '#/atoms'
import { SectionContainer } from '#/components/SectionContainer'
import { Navigation } from '#/components/Navigation'
import { Footer } from '#/components/Footer'
import { HeroHighlightIntro } from '#/components/HeroHighlightIntro'
import { ScrollIndicator } from '#/components/ScrollIndicator'
import { styled } from '#/styled-system/jsx'
import { homeHero as heroData } from '#/app/api/data'
import { ProjectHighlightCard } from '#/components/project-highlight-card/ProjectHighlightCard'
import { projects as projectsData } from '#/app/api/data'

// @todo - these fail to compile correctly if I make changes to panda.config.ts
// const paddingOffset = 24
// const contentHeight = `calc(100vh - ${paddingOffset * 2}px)`

const AbsolutelyPlacedScrollIndicator = () => (
  <Position
    top={0}
    left={0}
    right={0}
    h='calc(100vh - 48px)'
    css={{ pointerEvents: 'none' }}
  >
    {/* Get a reference to the bottom of the screen that doesn't
      exceed 100vh even if our height exceeds 100vh. We don't use
      fixed because we want our scrollIndicator position to be 
      within the constrained layout width */}
    <Position right='0' bottom='-12px'>
      <ScrollIndicator css={{ display: { base: 'none', sm: 'block' } }} />
    </Position>
  </Position>
)

/* Our home page has a different layout because we want the hero
bg height to expand with the content if it exceed 100vh */
export default function HomeContent() {
  // @todo - my future api
  // static rendering is the default
  //  --> https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default
  // const projects: { data: Project[] } = await fetch(
  //   'http://localhost:3000/api/projects'
  // ).then((res) => res.json());

  return (
    <>
      <Padding p={24}>
        <Background bg='bg-color-secondary' rounded='16px'>
          <SectionContainer maxW='hero-max-width' css={{ flexGrow: 1 }}>
            <Position pos='relative' css={{ minH: 'calc(100vh - 48px)' }}>
              <Space h={{ base: '24px', lg: '32px' }} />
              <Navigation />
              <styled.div h={{ base: '30px', md: '90px', lg: '140px' }} />
              <HeroHighlightIntro {...heroData} />
              <AbsolutelyPlacedScrollIndicator />
            </Position>
          </SectionContainer>
        </Background>
      </Padding>
      <SectionContainer
        css={{ pos: 'relative', scrollMarginTop: '-50px' }}
        id='Portfolio'
      >
        <Space h='sp-xl' />
        <Column gap={{ base: '70px', lg: '140px' }}>
          {projectsData.map((project) => (
            <ProjectHighlightCard
              key={project.slug}
              kicker={project.kicker}
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectUrl={`/projects/${project.slug}`}
              imageUrl={project.cardImageUrl}
            />
          ))}
        </Column>
        <Space h='sp-md' />
      </SectionContainer>
      <Space h={{ base: '0', sm: 'sp-lg' }} />
      <Footer />
    </>
  )
}
