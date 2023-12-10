import { styled } from '#/styled-system/jsx'
import Link from 'next/link'
import { TextLink, Row } from '#/atoms'

export const Navigation = () => (
  <Row justifyContent='space-between'>
    <Link href='/'>
      <styled.div fontSize='22px' fontWeight='900' color='text-color-logo'>
        panos.
      </styled.div>
    </Link>
    <Row gap='45px'>
      <TextLink href='/#Portfolio'>my work</TextLink>
      {/* <TextLink href='mailto:me@panoskouf.xyz'>get in touch</TextLink> */}
      <TextLink href='/contact'>get in touch</TextLink>
      <TextLink href='/cv.html'>📃CV</TextLink>
    </Row>
  </Row>
)
