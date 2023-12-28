import { PandaDivProps } from '#/types'
import { styled } from '../styled-system/jsx'

export type MaskProps = PandaDivProps<'pos' | 'w' | 'h' | 'css'>

export const Mask: React.FC<MaskProps> = ({ children, ...rest }) => (
  // can I skip position attribute here ?
  <styled.div pos='relative' overflow='hidden' {...rest}>
    {children}
  </styled.div>
)
