import { styled, HTMLStyledProps } from '#/styled-system/jsx'

type Props = HTMLStyledProps<'svg'>

export const HamburgerIcon: React.FC<Props> = ({
  stroke = 'red',
  width = '24px',
  height = '24px',
  ...rest
}) => (
  <styled.svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <styled.path
      d='M4 18L20 18'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <styled.path
      d='M4 12L20 12'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
    />
    <styled.path
      d='M4 6L20 6'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
    />
  </styled.svg>
)
