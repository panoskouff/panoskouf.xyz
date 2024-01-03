import {
  AspectRatioImage,
  Mask,
  Position,
  Space,
  Text,
  Transform,
} from '#/atoms'
import { Flex } from '#/atoms/Flex'
import Link from 'next/link'
import { styled } from '#/styled-system/jsx'
import { ProjectHighlightCardProps } from '#/types/data'

type Props = Pick<ProjectHighlightCardProps, 'imageUrl' | 'projectUrl'>

export const ProjectHighlightCardImageSection: React.FC<Props> = ({
  imageUrl,
  projectUrl,
}) => {
  return (
    <Link href={projectUrl ? projectUrl : '#'}>
      <Position
        className='projectHighlightCard'
        pos='relative'
        left='24px'
        css={{ w: 'calc(100% - 24px)' }}
      >
        <Transform
          pos='relative'
          transform={{
            base: 'translate3d(0px, 0px, 0px)',
            _projectHighlightCardHoverAncestor: 'translate3d(8px, -8px, 0px)',
          }}
          transformStyle='preserve-3d'
          transition='transform 0.2s ease'
        >
          <AspectRatioImage src={imageUrl} width={506} height={431.5} />
        </Transform>
        <Position w='100%'>
          {/* we add the actual space that our absolute positioned elements 
        create so hover state is not broken between our two elements  */}
          <Space h='48px' w='100%' />
        </Position>
        <Position left='-24px' bottom='-24px'>
          <styled.img
            src='/images/dot-pattern-min.png'
            w='100px'
            verticalAlign='middle'
            display='inline-block'
          />
        </Position>
        <Position bottom='-30px' right={{ base: '-10px', md: '10px' }} w='100%'>
          <Flex justifyContent='flex-end' gap='12px' alignItems='center'>
            <Transform
              pos='relative'
              transform={{
                base: 'translate3d(-15px, 0px, 0px)',
                _projectHighlightCardHoverAncestor:
                  'translate3d(0px, 0px, 0px)',
              }}
              transformStyle='preserve-3d'
              transition='transform 0.2s ease'
            >
              <Text
                as='p'
                textStyle='caption'
                color='text-color-tertiary'
                textTransform='unset'
                letterSpacing='0.5px'
                fontWeight='600'
                css={{
                  opacity: { base: 0, _projectHighlightCardHoverAncestor: 1 },
                  transition: {
                    base: 'none',
                    _projectHighlightCardHoverAncestor: 'opacity 0.2s ease',
                  },
                }}
              >
                See this project
              </Text>
            </Transform>
            <Mask>
              <Transform
                pos='relative'
                transform={{
                  base: 'translate3d(-34px, 0px, 0px)',
                  _projectHighlightCardHoverAncestor:
                    'translate3d(0px, 0px, 0px)',
                }}
                transformStyle='preserve-3d'
                transition={{
                  base: 'transform 0.1s ease 0s',
                  _projectHighlightCardHoverAncestor:
                    'transform 0.2s ease 0.15s',
                }}
              >
                <styled.img
                  src='/images/ic-arrow-forward-18px.svg'
                  w='34px'
                  verticalAlign='middle'
                  display='inline-block'
                />
              </Transform>
            </Mask>
          </Flex>
        </Position>
      </Position>
    </Link>
  )
}
