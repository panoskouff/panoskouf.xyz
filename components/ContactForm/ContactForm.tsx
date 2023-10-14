import { styled } from '#/styled-system/jsx';
// prettier-ignore
import {
  Text, Space, Row, Column, Label, Input, Select, TextArea, Center, Padding,
} from '#/atoms';
import { SubmitButton } from './SubmitButton';
import { ContactFormState } from './action';

type Props = {
  formAction: (data: FormData) => Promise<ContactFormState>;
  formState: ContactFormState;
};

export const ContactForm = ({ formAction, formState }: Props) => {
  return (
    // @ts-ignore
    <styled.form maxW='500px' w='100%' action={formAction}>
      <Column gap='20px'>
        <Row gap='20px'>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            name='name'
            placeholder='Anonymous'
            maxLength={200}
            title='Optional field, 200 characters max'
            flexGrow={1}
          />
        </Row>
        <Row gap='20px'>
          <Label required htmlFor='reason-for-contact'>
            Reason for contact
          </Label>
          <Select
            required
            name='reason-for-contact'
            flexGrow={1}
            title='This field is required'
            defaultValue=''
          >
            <option value='' disabled>
              -Please Select an Option-
            </option>
            <option value='feedback-on-my-work'>Feedback on my work</option>
            <option value='inquiry-about-collaboration'>
              Inquiry about collaboration
            </option>
            <option value='job-opportunity'>Job opportunity</option>
            {/* <option value='meme'>I need to share this meme with you !</option> */}
            <option value='other'>Other</option>
          </Select>
        </Row>
        <Column gap='6px'>
          <Label required htmlFor='message'>
            Message
          </Label>
          <TextArea
            required
            name='message'
            maxLength={3000}
            title='Required field, 3000 characters max'
            rows={10}
            placeholder='Your Message Here..'
          />
        </Column>
        <Column gap='6px'>
          <Label htmlFor='need-to-follow-up'>
            Do you want to hear back from me?
          </Label>
          <Input
            type='text'
            name='need-to-follow-up'
            placeholder='Let me know what is the best way to contact you.'
            maxLength={500}
            title='Optional field, 500 characters max'
            flexGrow={1}
          />
        </Column>
        <Center>
          {/* @todo create reusable button component */}
          {/* @todo add focus state */}
          <Padding pt={20}>
            <SubmitButton />
            <Space h='sp-xs' />
            {formState.submitted && !formState.ServerValidationSuccessful && (
              <Text>Something went wrong ❌</Text>
            )}
          </Padding>
        </Center>
      </Column>
    </styled.form>
  );
};
