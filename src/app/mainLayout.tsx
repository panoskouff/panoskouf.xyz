import { Position, Space, Flex, Background, Padding } from '#/atoms'
import { SectionContainer } from '#/components/SectionContainer'
import { Navigation } from '#/components/Navigation'
import { Footer } from '#/components/Footer'

const expanded = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

/* we need to do this because Next.js doesn't support
  having a layout with parallel routes in a grouped route */
export default function MainLayout({
  hero,
  children,
}: {
  hero: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <>
      <Flex flexDirection='column' css={{ pos: 'relative', minH: '100vh' }}>
        <Position pos='absolute' {...expanded} css={{ h: '100vh', zIndex: -1 }}>
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
            {/* @todo check if space above navigation is correct here */}
            <Space h='48px' />
            <Navigation />
            {hero}
          </Position>
        </SectionContainer>
      </Flex>
      {children}
      <Space h='sp-lg' />
      <Footer />
    </>
  )
}
