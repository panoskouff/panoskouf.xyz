'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().max(200).optional(),
  reasonForContact: z.enum([
    'feedback-on-my-work',
    'inquiry-about-collaboration',
    'job-opportunity',
    'other',
  ]),
  message: z.string().max(3000),
  followUp: z.string().max(500).optional(),
});

export type ContactFormState = {
  submitted: boolean;
  ServerValidationSuccessful: boolean;
};

export async function handleContactForm(
  _: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = schema.safeParse({
    name: formData.get('name'),
    reasonForContact: formData.get('reason-for-contact'),
    message: formData.get('message'),
    followUp: formData.get('need-to-follow-up'),
  });

  if (!result.success) {
    return {
      submitted: true,
      ServerValidationSuccessful: false,
    };
  }

  // @todo post result.data to backend

  return {
    submitted: true,
    ServerValidationSuccessful: true,
  };
}
