import { Text } from '#/atoms'
import { Background, BackgroundProps } from '#/atoms/Background'

type Props = BackgroundProps & {
  // default style for text only
  text?: string
  // @todo support text and link
  // link?: string;
}

export const Tag: React.FC<Props> = ({ text, children, ...rest }) => (
  <Background bg='bg-color-secondary' rounded='sm' {...rest}>
    {text ? (
      <Text
        fontWeight='700'
        fontSize='13px'
        lineHeight='13px'
        css={{ p: '6px 10px' }}
      >
        {text}
      </Text>
    ) : (
      children
    )}
  </Background>
)
