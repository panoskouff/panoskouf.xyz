import { styled } from '../../styled-system/jsx';
import { AspectRatioImage, Positioned, Space, TextLink } from '#/atoms';
import { Flex } from '#/atoms';
import { Background } from '#/atoms';
import { Padding } from '#/atoms/Padding';
import { SectionContainer } from '#/components/SectionContainer';
import { Navigation } from '#/components/Navigation';
import { ProjectHighlightIntro } from '#/components/ProjectHighlightIntro';
import { Footer } from '#/components/Footer';

// @todo share viewport cover layout as a layout between home and project route
export default function Project() {
  return (
    <>
      <Flex flexDirection='column' css={{ pos: 'relative', minH: '100vh' }}>
        <Positioned pos='absolute' css={{ h: '100vh', zIndex: -1 }}>
          <Padding p='24px' css={{ h: '100%' }}>
            <Background
              bg='bg-color-secondary'
              rounded='16px'
              css={{ h: '100%' }}
            />
          </Padding>
        </Positioned>
        <SectionContainer>
          {/* @todo check if space above navigation is correct here */}
          <Space h='48px' />
          <Navigation />
          <styled.div h='15vh' />
          <ProjectHighlightIntro
            title='Graphical User Interface'
            description='Web-based Graphical User Interface for the Hippalus Exploratory
          Search System. A UI reimplementation for the Hippalus Exploratory
          Search System as a single page application written from scratch.'
            projectUrl='https://my-thesis.vercel.app/dataset/2'
          />
          <Space h='sp-lg' />
          <Positioned
            pos='relative'
            top='0'
            left='50%'
            css={{ maxW: 928, transform: 'translateX(-50%)' }}
          >
            <AspectRatioImage
              src='https://panoskouf.xyz/images/projects/spa-hippalus/thesis-showcase-1.jpg'
              width={1440}
              height={5873}
            />
          </Positioned>
          {/* <div style={{ height: 2000, width: 50, backgroundColor: 'red' }} /> */}
        </SectionContainer>
      </Flex>
      <Space h='sp-lg' />
      {/* <div style={{ height: 50, width: 50, backgroundColor: 'green' }} /> */}
      <Footer />
    </>
  );
}
