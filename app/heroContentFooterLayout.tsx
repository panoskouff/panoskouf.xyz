import { Positioned, Space, Flex, Background, Padding } from '#/atoms';
import { SectionContainer } from '#/components/SectionContainer';
import { Navigation } from '#/components/Navigation';
import { Footer } from '#/components/Footer';

/* we need to do this because Next.js doesn't support
  having a layout with parallel routes in a grouped route */
export default function HeroContentFooterLayout({
  hero,
  children,
}: {
  hero: React.ReactNode;
  children: React.ReactNode;
}) {
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
        <SectionContainer css={{ h: '100%', flexGrow: 1 }}>
          <Positioned pos='relative' css={{ h: '100%' }}>
            {/* @todo check if space above navigation is correct here */}
            <Space h='48px' />
            <Navigation />
            {hero}
          </Positioned>
        </SectionContainer>
      </Flex>
      {children}
      <Space h='sp-lg' />
      <Footer />
    </>
  );
}
