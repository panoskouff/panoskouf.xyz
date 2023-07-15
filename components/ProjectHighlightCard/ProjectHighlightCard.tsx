import { AspectRatioImage, ButtonLink, Space, Text } from '#/atoms';
import { Tag } from '../Tag';
import s from './ProjectHighlightCard.module.css';

type Props = {
  caption?: string;
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string;
  tags?: string[];
};

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

export const ProjectHighlightCard: React.FC<Props> = ({
  caption,
  title,
  description,
}) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Text as='h4' textStyle='caption' color='text-color-tertiary'>
          {caption}
        </Text>
        <Space h='sp-xs' />
        <Text as='h2' textStyle='title-secondary'>
          {title}
        </Text>
        <Space h='sp-sm' />
        <div className={s.tagContainer}>
          {mockTags.map((tag) => (
            <Tag key={tag.id} text={tag.text} />
          ))}
        </div>
        <Space h='sp-md' />
        <Space h='sp-xs' />
        <Text as='p' textStyle='body' css={{ maxW: '480px' }}>
          {description}
        </Text>
        <ButtonLink className={s.button}>View Project</ButtonLink>
      </div>
      <div className={s.imageContainer}>
        <AspectRatioImage
          src='https://panoskouf.xyz/images/projects/personal-website.jpg'
          width={506}
          height={431.5}
        />
      </div>
    </div>
  );
};

export default ProjectHighlightCard;
