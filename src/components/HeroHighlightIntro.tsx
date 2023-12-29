import { Space, Text } from '#/atoms'
import { ButtonLink } from '#/components/ButtonLink'
import { createMarkup } from '#/utils'
import { HeroHighlight } from '../types/data'

type HeroHighlightIntroProps = HeroHighlight

export const HeroHighlightIntro: React.FC<HeroHighlightIntroProps> = ({
  title,
  description,
  cta,
  ctaUrl = '#',
}) => {
  return (
    <>
      <Text
        as='h1'
        textStyle='title'
        color='text-color-primary'
        dangerouslySetInnerHTML={createMarkup(title)}
      />
      <Space h='sp-sm' />
      <Text
        as='p'
        textStyle='body'
        fontSize={{ base: '16px', sm: '18px' }}
        lineHeight={{ base: '24px', sm: '32px' }}
        css={{ maxWidth: 600, whiteSpace: 'pre-line' }}
        dangerouslySetInnerHTML={createMarkup(description)}
      />
      <Space h='sp-xs' />
      <Space />
      <ButtonLink href={ctaUrl}>{cta}</ButtonLink>
      <Space />
    </>
  )
}
