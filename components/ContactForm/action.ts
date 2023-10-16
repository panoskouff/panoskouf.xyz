'use server';

import { z } from 'zod';
import { model } from './model';

import { AtLeastOneString } from '../../types/atLeastOneString';

const options = model.reasonForContact.select.options.map(
  (option) => option.value
) as AtLeastOneString;

const schema = z.object({
  name: z.string().max(model.name.input.maxLength).optional(),
  reasonForContact: z.enum(options),
  message: z.string().max(model.message.textarea.maxLength),
  followUp: z.string().max(model.needToFollowBack.input.maxLength).optional(),
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
    name: formData.get(model.name.input.name),
    reasonForContact: formData.get(model.reasonForContact.select.name),
    message: formData.get(model.message.textarea.name),
    followUp: formData.get(model.needToFollowBack.input.name),
  });

  if (!result.success) {
    console.log('validation failed', result.error);
    return {
      submitted: true,
      ServerValidationSuccessful: false,
    };
  }

  console.log('validation successful', result.data);

  // @todo post result.data to backend

  return {
    submitted: true,
    ServerValidationSuccessful: true,
  };
}
