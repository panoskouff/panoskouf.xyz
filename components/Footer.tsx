import { Text } from '#/atoms';
import { Background } from '#/atoms';
import { Padding } from '#/atoms/Padding';
import { SectionContainer } from '#/components/SectionContainer';

export const Footer = () => (
  <Padding p='24px'>
    <Background bg='bg-color-secondary' rounded='16px'>
      <Padding py='30px'>
        <SectionContainer>
          <Text
            as='p'
            textStyle='body'
            fontSize='14px'
            lineHeight='14px'
            color='#00000080'
          >
            © All rights reserved - Panagiotis Koufopoulos
          </Text>
        </SectionContainer>
      </Padding>
    </Background>
  </Padding>
);
