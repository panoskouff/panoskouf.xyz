import { Position } from '#/atoms';
import { HeroHighlightIntro } from '#/components/HeroHighlightIntro';
import { ScrollIndicator } from '#/components/ScrollIndicator';
import { styled } from '#/styled-system/jsx';
import { homeHero as data } from '#/app/api/data';
// import { HeroHighlight } from '#/types/data';

export default function HomeHero() {
  // @todo - my future api
  // const heroData: { data: HeroHighlight } = await fetch(
  //   'http://localhost:3000/api/home'
  // ).then((res) => res.json());

  return (
    <>
      <styled.div h='15vh' />
      <HeroHighlightIntro {...data} />
      <Position right='0' bottom='12px'>
        <ScrollIndicator />
      </Position>
    </>
  );
}
