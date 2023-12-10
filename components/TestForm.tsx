'use client'

/* A form with this pattern seem to provide the most functionality
since we have control over anything and can use server function at
the same time */

import { useRef } from 'react'

export const TestForm = ({
  handleSubmitServer,
}: {
  handleSubmitServer: (data: FormData) => Promise<string>
}) => {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(formRef.current!)
    console.log('🔥', { data: formData })
    console.log(formData.get('inputNameTest'))
    const result = await handleSubmitServer(formData)
    console.log('result', result)
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name='inputNameTest' type='text' />
      <button type='submit'>Submit</button>
    </form>
  )
}

// and then in parent
/*
async function handleSubmitServer(data: FormData) {
  'use server';
  const formDataObject = Object.fromEntries(data.entries());
  console.log('🔥📍📍📍', { data: formDataObject });

  return;
}
*/
