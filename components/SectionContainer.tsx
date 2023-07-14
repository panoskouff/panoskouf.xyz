import { Flex, FlexProps } from '#/atoms/Flex';
import { HTMLStyledProps, styled } from '#/styled-system/jsx';

export type SectionContainerProps = FlexProps &
  Partial<Pick<HTMLStyledProps<'div'>, 'maxW' | 'px'>>;

// @todo move a version of this in atoms and drop Container from there
// @todo find a way to differentiate between maxWidth, pos of of flex and div
/**
 * Wraps the section's content in a box, which is centered by default
 * and has it's width constrained.
 *
 * @param justifyContent the alignment of the box that contains the content
 * @param maxW the max width of the box that contains the content
 * @param px the outer padding of the box that contains the content
 */
export const SectionContainer: React.FC<SectionContainerProps> = ({
  justifyContent = 'center',
  maxW = 'section-max-width',
  px = 'section-offset',
  children,
  ...rest
}) => (
  <Flex justifyContent={justifyContent} {...rest}>
    <styled.div flexGrow={1} maxW={maxW} px={px}>
      {children}
    </styled.div>
  </Flex>
);

/*
if I want to set position for styled.div I can do
<SectionContainer>
  <Positioned pos='relative'>

  issue:
  or I could expose a prop for it but the name would have to
  be pos or position because position and not positionForContent
  or sth like that
*/
