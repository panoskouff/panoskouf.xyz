// @todo clean up this file
import {
  AspectRatioImage,
  Mask,
  Position,
  Space,
  Text,
  Transform,
} from '#/atoms'
import { Flex, FlexProps } from '#/atoms/Flex'
import { Container } from '#/atoms/Container'
import { ButtonLink } from './ButtonLink'
import { Tag } from './Tag'
import Link from 'next/link'
import { styled } from '#/styled-system/jsx'

type Props = FlexProps & {
  kicker?: string
  title: string
  description: string
  projectUrl: string
  imageUrl: string
  tags: { id: string; text: string }[]
}

export const ProjectHighlightCard: React.FC<Props> = ({
  kicker,
  title,
  description,
  projectUrl,
  imageUrl,
  tags,
  children,
  ...rest
}) => (
  <Flex
    gap='60px'
    flexDirection={{ base: 'column', md: 'row' }}
    css={{ flexGrow: 1 }}
    {...rest}
  >
    <Container w={{ base: '100%', md: '55%' }} css={{ alignSelf: 'center' }}>
      <Text as='h4' textStyle='caption' color='text-color-tertiary'>
        {kicker}
      </Text>
      <Space h='sp-xs' />
      <Text as='h2' textStyle='title-secondary'>
        {title}
      </Text>
      <Space h='sp-sm' />
      <Flex gap='16px'>
        {tags.map((tag) => (
          <Tag key={tag.id} text={tag.text} />
        ))}
      </Flex>
      <Space h='sp-md' />
      <Space h='sp-xs' />
      <Text as='p' textStyle='body' css={{ maxW: '480px' }}>
        {description}
      </Text>
      <Space h='sp-md' />
      <ButtonLink href={projectUrl}>View Project</ButtonLink>
    </Container>
    <Container w={{ base: '100%', md: '45%' }} css={{ alignSelf: 'center' }}>
      <Link href={projectUrl}>
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
          <Position bottom='-30px' right='10px' w='100%'>
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
    </Container>
  </Flex>
)
