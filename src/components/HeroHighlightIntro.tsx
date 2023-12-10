import { Space, Text } from '#/atoms'
import { ButtonLink } from '#/components/ButtonLink'
import { HeroHighlight } from '../types/data'

type HeroHighlightIntroProps = HeroHighlight & {
  ctaUrl?: string
}

export const HeroHighlightIntro: React.FC<HeroHighlightIntroProps> = ({
  title,
  description,
  cta,
  ctaUrl = '#',
}) => (
  <>
    <Text
      as='h1'
      textStyle='title'
      color='text-color-primary'
      css={{ whiteSpace: 'pre-line' }}
    >
      {title}
    </Text>
    <Space h='sp-sm' />
    <Text
      as='p'
      textStyle='body'
      css={{ maxWidth: 600, whiteSpace: 'pre-line' }}
    >
      {description}
    </Text>
    <Space h='sp-xs' />
    <Space />
    <ButtonLink href={ctaUrl}>{cta}</ButtonLink>
  </>
)
