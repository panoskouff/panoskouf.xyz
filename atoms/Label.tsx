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

export const Label: React.FC<LabelProps> = ({
  children,
  textStyle = 'body',
  color = 'text-color-primary',
  ...rest
}) => (
  <styled.label textStyle={textStyle} color={color} {...rest}>
    {children}
  </styled.label>
);
