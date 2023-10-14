'use client';
// @todo refactor this to use mostly server components
// import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { experimental_useFormState as useFormState } from 'react-dom';
import { Text, Space, Center, Padding } from '#/atoms';
import {
  handleContactForm,
  ContactFormState,
} from '#/components/ContactForm/action';
import { ContactForm } from '#/components/ContactForm/ContactForm';

const initialState: ContactFormState = {
  submitted: false,
  ServerValidationSuccessful: false,
};

/*
useFormStatus looks up the status of the nearest <form> parent element,
i.e. the element that uses this hook must be a child of a <form>.

useFormState seems to not provide a way to reset the state, although we
can get around this by watching it and have another state variable
but is not clean..
*/

export default function Contact() {
  const [state, formAction] = useFormState<ContactFormState>(
    // @ts-ignore - this is a bug in the types
    handleContactForm,
    initialState
  );

  return (
    <Center css={{ flexDirection: 'column' }}>
      <Space h='sp-md' />
      {state.submitted && state.ServerValidationSuccessful ? (
        // @todo fix height of this container and parents
        <Padding py={120} css={{ alignSelf: 'center' }}>
          <Text textStyle='title'>Thank you for your message 👌</Text>
          {/* reset state on history back button ?  --> seems like
            useFormState doesn't provide a way to reset the state */}
        </Padding>
      ) : (
        <>
          <Padding py={20}>
            <Text textStyle='title'>Get in Touch</Text>
          </Padding>
          <Space h='sp-md' />
          {/* @ts-ignore - this is a bug in the types */}
          <ContactForm formAction={formAction} formState={state} />
        </>
      )}
    </Center>
  );
}

// https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#convention
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
// https://www.youtube.com/watch?v=czvSZqnpTHs
