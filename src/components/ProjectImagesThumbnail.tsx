import { Background, Position, Placeholder, Mask } from '#/atoms'

/* 
img sources 1,2
left and top

or children ?s
*/

export const ProjectImagesThumbnail = () => {
  return (
    <Mask aspectRatio='1 / 1' w='100%' rounded='lg'>
      <Background bg='#f9f3e6' h='100%'>
        <Position left='30%' w='50%'>
          <Placeholder aspectRatio='300 / 300' />
        </Position>
        <Position left='15%' top='35%' w='50%'>
          <Placeholder aspectRatio='300 / 250' />
        </Position>
      </Background>
    </Mask>
  )
}
