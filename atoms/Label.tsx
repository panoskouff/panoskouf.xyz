import { HTMLStyledProps, styled } from '#/styled-system/jsx';

export type PandaLabelProps = Pick<
  HTMLStyledProps<'label'>,
  | 'display'
  | 'textStyle'
  | 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'lineClamp'
  | 'truncate'
  | 'textTransform'
  | 'css'
>;

export type LabelProps = Merge<
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'color'>,
  Partial<PandaLabelProps>
>;

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => (
  <styled.label textStyle='body' color='text-color-primary' {...rest}>
    {children}
  </styled.label>
);
