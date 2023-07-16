import { AspectRatioImage, ButtonLink, Positioned, Space, Text } from '#/atoms';
// @todo export atoms types from index
import { Flex, FlexProps } from '#/atoms/Flex';
import { Container } from '#/atoms/Container';
import { Tag } from './Tag';
import Link from 'next/link';
import { styled } from '#/styled-system/jsx';

const mockTags = [
  {
    id: 'tag-1',
    text: 'React',
  },
  {
    id: 'tag-2',
    text: 'NextJS',
  },
  {
    id: 'tag-3',
    text: 'TypeScript',
  },
];

type Props = FlexProps & {
  caption?: string;
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string;
  tags?: string[];
};

export const ProjectHighlightCard: React.FC<Props> = ({
  caption,
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
        {caption}
      </Text>
      <Space sz='sp-xs' />
      <Text as='h2' textStyle='title-secondary'>
        {title}
      </Text>
      <Space sz='sp-sm' />
      <Flex gap='16px'>
        {mockTags.map((tag) => (
          <Tag key={tag.id} text={tag.text} />
        ))}
      </Flex>
      <Space sz='sp-md' />
      <Space sz='sp-xs' />
      <Text as='p' textStyle='body' css={{ maxW: '480px' }}>
        {description}
      </Text>
      <Space sz='sp-md' />
      <ButtonLink>View Project</ButtonLink>
    </Container>
    <Container w='46%' css={{ alignSelf: 'center' }}>
      <Link href={projectUrl}>
        <Positioned pos='relative' css={{ w: '100%' }}>
          <AspectRatioImage
            src='https://panoskouf.xyz/images/projects/personal-website.jpg'
            width={506}
            height={431.5}
          />
          <Positioned left='-24px' bottom='-24px' top='auto' right='auto'>
            <styled.img
              src='/images/dot-pattern-min.png'
              w='100px'
              verticalAlign='middle'
              display='inline-block'
            />
          </Positioned>
          <Positioned left='auto' bottom='-44px' top='auto' right='auto'>
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
          </Positioned>
        </Positioned>
      </Link>
    </Container>
  </Flex>
);