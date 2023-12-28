import { Position, Flex, Background, Padding, Column, Space } from '#/atoms'
import { SectionContainer } from '#/components/SectionContainer'
import { Navigation } from '#/components/Navigation'
import { Footer } from '#/components/Footer'
import { HeroHighlightIntro } from '#/components/HeroHighlightIntro'
import { ScrollIndicator } from '#/components/ScrollIndicator'
import { styled } from '#/styled-system/jsx'
import { homeHero as heroData } from '#/app/api/data'
import { ProjectHighlightCard } from '#/components/ProjectHighlightCard'
import { projects as projectsData } from '#/app/api/data'

const paddingOffset = 24
const contentHeight = `calc(100vh - ${paddingOffset * 2}px)`

const AbsolutelyPlacedScrollIndicator = () => (
  <Position top={0} left={0} right={0} h={contentHeight}>
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
          <SectionContainer css={{ flexGrow: 1 }}>
            <Position pos='relative' css={{ minH: contentHeight }}>
              {/* We place ScrollIndicator first so that
                it doesn't overlay other elements */}
              <AbsolutelyPlacedScrollIndicator />
              <Space h='24px' />
              <Navigation />
              <styled.div h={{ base: '5vh', md: '15vh' }} />
              <HeroHighlightIntro {...heroData} />
            </Position>
          </SectionContainer>
        </Background>
      </Padding>
      <SectionContainer css={{ pos: 'relative' }}>
        {/* consider constraining main content to around 850px */}
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
        <Space h='sp-lg' />
      </SectionContainer>
      <Space h='sp-lg' />
      <Footer />
    </>
  )
}
