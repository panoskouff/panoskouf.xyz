import { Row, Space, Text } from '#/atoms'
import { ButtonLink } from '../ButtonLink'
import { Tag } from '../Tag'
import { ProjectHighlightCardProps } from '#/types/data'

type Props = Pick<
  ProjectHighlightCardProps,
  'kicker' | 'title' | 'description' | 'projectUrl' | 'tags'
>

export const ProjectHighlightCardCTASection: React.FC<Props> = ({
  kicker,
  title,
  description,
  projectUrl,
  tags,
}) => {
  return (
    <>
      <Text
        as='h4'
        textStyle='caption'
        color='text-color-tertiary'
        fontWeight={700}
      >
        {kicker}
      </Text>
      <Space h='sp-xs' />
      <Text as='h2' textStyle='title-secondary'>
        {title}
      </Text>
      <Space h='sp-sm' />
      <Row gap='16px'>
        {tags && tags.map((tag) => <Tag key={tag.id} text={tag.text} />)}
      </Row>
      <Space h='sp-md' />
      <Text as='p' textStyle='body' css={{ maxW: '480px' }}>
        {description}
      </Text>
      <Space h='sp-md' />
      <ButtonLink href={projectUrl}>View Project</ButtonLink>
    </>
  )
}
