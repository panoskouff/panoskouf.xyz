import { Container, ContainerProps } from '#/atoms/Container';
import { theme } from '#/styles/theme';

export type PageContainerProps = ContainerProps;

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...rest
}) => (
  <Container maxWidth={theme.sectionMaxWidth} {...rest}>
    {children}
  </Container>
);
