import { styled } from '../../styled-system/jsx';
import { Positioned, Space, TextLink } from '#/atoms';
import { Flex } from '#/atoms';
import { Background } from '#/atoms';
import { Padding } from '#/atoms/Padding';
import { SectionContainer } from '#/components/SectionContainer';
import { Navigation } from '#/components/Navigation';
import { Text, TextAlign } from '#/atoms';

// @todo share viewport cover layout as a layout between home and project route
export default function Project() {
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
                  <TextAlign textAlign='center'>
                    <Text
                      as='h4'
                      textStyle='caption'
                      color='text-color-tertiary'
                    >
                      Project Showcase
                    </Text>
                    <Space h='sp-xs' />
                    <Text as='h1' textStyle='title'>
                      Graphical User Interface
                    </Text>
                    <Space h='sp-sm' />
                    <Text as='p' css={{ maxW: '736px' }}>
                      Web-based Graphical User Interface for the Hippalus
                      Exploratory Search System. A UI reimplementation for the
                      Hippalus Exploratory Search System as a single page
                      application written from scratch.
                    </Text>
                    <Space h='sp-sm' />
                    <TextLink
                      href='https://my-thesis.vercel.app/dataset/2'
                      openInNewTab
                    >
                      visit live site →
                    </TextLink>
                  </TextAlign>
                  <Space h='sp-md' />
                </Positioned>
              </SectionContainer>
            </Background>
          </Padding>
        </Positioned>
      </Flex>
    </>
  );
}
