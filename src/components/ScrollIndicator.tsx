import { Mask, Transform, Text } from '#/atoms'
import { styled } from '#/styled-system/jsx'

type Props = {
  sideText?: string
}

export const ScrollIndicator: React.FC<Props> = ({ sideText = 'scroll' }) => (
  <Mask w={46} h={105}>
    <styled.div
      w={2}
      h={105}
      bgColor='text-color-primary'
      animation='popInSlideDown 4s var(--easings-swift-decelerate) 1s infinite'
    />
    <Transform
      top={3}
      left={40}
      transform='perspective(0px) rotate(90deg)'
      transformOrigin='0% 0%'
    >
      <Text textStyle='caption' fontWeight='700' letterSpacing='normal'>
        {sideText}
      </Text>
    </Transform>
  </Mask>
)
