import { Positioned } from '#/atoms';
import { HeroHighlightIntro } from '#/components/HeroHighlightIntro';
import { ScrollIndicator } from '#/components/ScrollIndicator/ScrollIndicator';
import { styled } from '#/styled-system/jsx';

export default function HomeHero() {
  return (
    <>
      <styled.div h='15vh' />
      <HeroHighlightIntro />
      <Positioned left='auto' top='auto' right='0' bottom='12px'>
        <ScrollIndicator />
      </Positioned>
    </>
  );
}
