import { styled } from '#/styled-system/jsx'
// prettier-ignore
import {
  Text, Space, Row, Column, Label, Input, Select, TextArea, Center, Padding,
} from '#/atoms';
import { SubmitButton } from './SubmitButton'
import { ContactFormState } from './action'
import { model } from './model'

const nameLabel = model.name.label
const nameInput = model.name.input
const reasonForContactLabel = model.reasonForContact.label
const reasonForContactSelect = model.reasonForContact.select
const messageLabel = model.message.label
const messageTextArea = model.message.textarea
// @todo follow back or follow up
const needToFollowUpLabel = model.needToFollowBack.label
const needToFollowUpInput = model.needToFollowBack.input

type Props = {
  formAction: (data: FormData) => Promise<ContactFormState>
  formState: ContactFormState
}

export const ContactForm = ({ formAction, formState }: Props) => {
  return (
    // @ts-ignore
    <styled.form maxW='500px' w='100%' action={formAction}>
      <Column gap='20px'>
        <Row gap='20px'>
          <Label htmlFor={nameLabel.htmlFor}>{nameLabel.innerText}</Label>
          <Input
            type='text'
            name={nameInput.name}
            placeholder={nameInput.placeholder}
            maxLength={nameInput.maxLength}
            title={nameInput.title}
            flexGrow={1}
          />
        </Row>
        <Row gap='20px'>
          <Label required htmlFor={reasonForContactLabel.htmlFor}>
            {reasonForContactLabel.innerText}
          </Label>
          <Select
            required
            name={reasonForContactSelect.name}
            flexGrow={1}
            title={reasonForContactSelect.title}
            defaultValue={reasonForContactSelect.defaultValue}
          >
            <option value='' disabled>
              {reasonForContactSelect.defaultValueText}
            </option>
            {reasonForContactSelect.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.innerText}
              </option>
            ))}
          </Select>
        </Row>
        <Column gap='6px'>
          <Label required htmlFor={messageLabel.htmlFor}>
            {messageLabel.innerText}
          </Label>
          <TextArea
            required
            name={messageTextArea.name}
            maxLength={messageTextArea.maxLength}
            title={messageTextArea.title}
            placeholder={messageTextArea.placeholder}
            rows={10}
          />
        </Column>
        <Column gap='6px'>
          <Label htmlFor={needToFollowUpLabel.htmlFor}>
            {needToFollowUpLabel.innerText}
          </Label>
          <Input
            type='text'
            name={needToFollowUpInput.name}
            placeholder={needToFollowUpInput.placeholder}
            maxLength={needToFollowUpInput.maxLength}
            title={needToFollowUpInput.title}
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
  )
}
