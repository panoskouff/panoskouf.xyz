import {
  Position,
  Space,
  Column,
  Background,
  Padding,
  ColumnFullHeightWrapper,
  RemainingHeightContainer,
} from '#/atoms'
import { SectionContainer } from '#/components/SectionContainer'
import { Navigation } from '#/components/Navigation'
import { Footer } from '#/components/Footer'
import { styled } from '#/styled-system/jsx'

export default function ContactLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <>
      <Column css={{ pos: 'relative', minH: '100vh' }}>
        <Position pos='absolute' css={{ h: '100%', zIndex: -1 }}>
          <Padding p={{ base: '24px 12px', md: '24px' }} css={{ h: '100%' }}>
            <Background
              bg='bg-color-secondary'
              rounded='16px'
              css={{ h: '100%' }}
            />
          </Padding>
        </Position>
        <SectionContainer css={{ h: '100%', flexGrow: 1 }}>
          <Position pos='relative' css={{ h: '100%' }}>
            <ColumnFullHeightWrapper>
              {/* @todo check if space above navigation is correct here */}
              <Space h='48px' />
              <Navigation />
              <RemainingHeightContainer>{children}</RemainingHeightContainer>
              <Space h='sp-lg' />
              <Footer />
            </ColumnFullHeightWrapper>
          </Position>
        </SectionContainer>
      </Column>
    </>
  )
}
