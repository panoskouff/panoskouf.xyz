import { TextAlign, Text, Space, TextLink } from '#/atoms'
import { ProjectHighlight } from '../types/data'
import Link from 'next/link'
import { GithubIcon } from './Icon'

type ProjectHighlightIntroProps = Pick<
  ProjectHighlight,
  'kicker' | 'title' | 'description' | 'projectUrl' | 'projectCTA' | 'githubUrl'
>

// @todo is it a better practice to have default values
// for everything or let it break if value is missing in CMS ?
export const ProjectHighlightIntro: React.FC<ProjectHighlightIntroProps> = ({
  kicker,
  title,
  description,
  projectUrl,
  projectCTA,
  githubUrl,
}) => (
  <TextAlign textAlign='center'>
    <Text
      as='h4'
      textStyle='caption'
      color='text-color-tertiary'
      fontWeight={700}
    >
      {kicker}
    </Text>
    <Space h='sp-xs' />
    <Text as='h1' textStyle='title' fontSize={42}>
      {title}
    </Text>
    <Space h='sp-sm' />
    <Text as='p' css={{ maxW: '736px' }}>
      {description}
    </Text>
    <Space h='sp-sm' />
    {githubUrl && (
      <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
        <GithubIcon width='28px' height='32px' />
      </Link>
    )}
    <Space h='sp-sm' />
    {projectCTA && projectUrl && (
      <TextLink href={projectUrl} openInNewTab>
        {projectCTA}
      </TextLink>
    )}
  </TextAlign>
)
