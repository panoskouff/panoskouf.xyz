import { Positioned, Space, Flex, Background, Padding } from '#/atoms';
import { SectionContainer } from '#/components/SectionContainer';
import { Navigation } from '#/components/Navigation';
import { Footer } from '#/components/Footer';

export default function ContactLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Flex flexDirection='column' css={{ pos: 'relative', minH: '100vh' }}>
        <Positioned pos='absolute' css={{ h: '100%', zIndex: -1 }}>
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
            {children}
            <Space h='sp-lg' />
            {/* @todo fix footer */}
            <Footer />
          </Positioned>
        </SectionContainer>
      </Flex>
    </>
  );
}
