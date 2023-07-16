import { AspectRatioImage, ButtonLink, Space, Text } from '#/atoms';
// @todo export atoms types from index
import { Flex, FlexProps } from '#/atoms/Flex';
import { Container } from '#/atoms/Container';
import { Tag } from './Tag';

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
  <Flex css={{ flexGrow: 1 }} {...rest}>
    <Container w='54%' css={{ alignSelf: 'center', mr: '80px' }}>
      <Text as='h4' textStyle='caption' color='text-color-tertiary'>
        {caption}
      </Text>
      <Space h='sp-xs' />
      <Text as='h2' textStyle='title-secondary'>
        {title}
      </Text>
      <Space h='sp-sm' />
      <Flex gap='16px'>
        {mockTags.map((tag) => (
          <Tag key={tag.id} text={tag.text} />
        ))}
      </Flex>
      <Space h='sp-md' />
      <Space h='sp-xs' />
      <Text as='p' textStyle='body' css={{ maxW: '480px' }}>
        {description}
      </Text>
      <Space h='sp-md' />
      <ButtonLink>View Project</ButtonLink>
    </Container>
    <Container minW='46%' css={{ alignSelf: 'center' }}>
      <AspectRatioImage
        src='https://panoskouf.xyz/images/projects/personal-website.jpg'
        width={506}
        height={431.5}
      />
    </Container>
  </Flex>
);
