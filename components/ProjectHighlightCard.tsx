import { AspectRatioImage, Position, Space, Text } from '#/atoms';
// @todo export atoms types from index
import { Flex, FlexProps } from '#/atoms/Flex';
import { Container } from '#/atoms/Container';
import { ButtonLink } from './ButtonLink';
import { Tag } from './Tag';
import Link from 'next/link';
import { styled } from '#/styled-system/jsx';

type Props = FlexProps & {
  kicker?: string;
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string;
  tags: { id: string; text: string }[];
};

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
    gap='80px'
    flexDirection={{ smToLg: 'column-reverse', lg: 'row' }}
    css={{ flexGrow: 1 }}
    {...rest}
  >
    <Container w='54%' css={{ alignSelf: 'center' }}>
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
    <Container w='46%' css={{ alignSelf: 'center' }}>
      <Link href={projectUrl}>
        <Position pos='relative' css={{ w: '100%' }}>
          <AspectRatioImage src={imageUrl} width={506} height={431.5} />
          <Position left='-24px' bottom='-24px' top='auto' right='auto'>
            <styled.img
              src='/images/dot-pattern-min.png'
              w='100px'
              verticalAlign='middle'
              display='inline-block'
            />
          </Position>
          <Position left='auto' bottom='-44px' top='auto' right='auto'>
            {/* @todo https://panda-css.com/docs/guides/dynamic-styling */}
            <Flex gap='12px' alignItems='center'>
              {/* <Text
                as='p'
                textStyle='caption'
                color='text-color-tertiary'
                textTransform='unset'
              >
                See this project
              </Text>
              <styled.img
                src='/images/ic-arrow-forward-18px.svg'
                w='100px'
                verticalAlign='middle'
                display='inline-block'
              /> */}
            </Flex>
          </Position>
        </Position>
      </Link>
    </Container>
  </Flex>
);
