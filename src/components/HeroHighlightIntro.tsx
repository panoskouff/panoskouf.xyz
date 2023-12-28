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
}) => {
  const createMarkup = () => {
    return { __html: description }
  }

  return (
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
        fontSize={{ base: '16px', md: '18px' }}
        lineHeight={{ base: '24px', md: '32px' }}
        css={{ maxWidth: 600, whiteSpace: 'pre-line' }}
        dangerouslySetInnerHTML={createMarkup()}
      />
      <Space h='sp-xs' />
      <Space />
      <ButtonLink href={ctaUrl}>{cta}</ButtonLink>
      <Space />
    </>
  )
}
