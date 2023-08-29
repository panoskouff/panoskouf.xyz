import { TextAlign, Text, Space, TextLink } from '#/atoms';
import { ProjectHighlightIntro as ProjectHighlightIntroProps } from '../types/data';

// @todo is it a better practice to have default values
// for everything or let it break if value is missing in CMS ?
export const ProjectHighlightIntro: React.FC<ProjectHighlightIntroProps> = ({
  kicker = 'Project Showcase',
  title,
  description,
  projectUrl,
  projectCTA = 'visit live site →',
}) => (
  <TextAlign textAlign='center'>
    <Text as='h4' textStyle='caption' color='text-color-tertiary'>
      {kicker}
    </Text>
    <Space h='sp-xs' />
    <Text as='h1' textStyle='title'>
      {title}
    </Text>
    <Space h='sp-sm' />
    <Text as='p' css={{ maxW: '736px' }}>
      {description}
    </Text>
    <Space h='sp-sm' />
    <TextLink href={projectUrl} openInNewTab>
      {projectCTA}
    </TextLink>
  </TextAlign>
);
