'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { styled } from '#/styled-system/jsx'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <styled.button
      rounded='sm'
      bg='#5a5a5a'
      color='white'
      p='10px 20px'
      fontSize='16px'
      fontWeight='bold'
      border='2px solid white'
      minW='200px'
      outline='1px solid black'
      cursor='pointer'
      type='submit'
      aria-disabled={pending}
    >
      {pending ? <styled.h1 fontSize={50}>Loading...</styled.h1> : 'Submit'}
    </styled.button>
  )
}
