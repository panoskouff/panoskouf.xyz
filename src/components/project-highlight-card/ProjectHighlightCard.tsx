import { Flex } from '#/atoms/Flex'
import { Container } from '#/atoms/Container'
import { ProjectHighlightCardCTASection } from './ProjectHighlightCardCTASection'
import { ProjectHighlightCardImageSection } from './ProjectHighlightCardImageSection'
import { ProjectHighlightCardProps } from '#/types/data'

type Props = ProjectHighlightCardProps

export const ProjectHighlightCard: React.FC<Props> = ({
  kicker,
  title,
  description,
  projectUrl,
  imageUrl,
  tags,
}) => (
  <Flex
    gap='60px'
    flexDirection={{ base: 'column', md: 'row' }}
    css={{ flexGrow: 1 }}
  >
    <Container w={{ base: '100%', md: '55%' }} css={{ alignSelf: 'center' }}>
      <ProjectHighlightCardCTASection
        kicker={kicker}
        title={title}
        description={description}
        projectUrl={projectUrl}
        tags={tags}
      />
    </Container>
    <Container w={{ base: '100%', md: '45%' }} css={{ alignSelf: 'center' }}>
      <ProjectHighlightCardImageSection
        projectUrl={projectUrl}
        imageUrl={imageUrl}
      />
    </Container>
  </Flex>
)
