export const model = {
  name: {
    label: {
      htmlFor: 'name',
      innerText: 'name',
    },
    input: {
      name: 'name',
      placeholder: 'Anonymous',
      maxLength: 200,
      title: 'Optional field, 200 characters max',
    },
  },
  reasonForContact: {
    label: {
      htmlFor: 'reason-for-contact',
      innerText: 'reason for contact',
    },
    select: {
      name: 'reason-for-contact',
      title: 'This field is required',
      defaultValue: '',
      defaultValueText: '-Please Select an Option-',
      options: [
        {
          value: 'feedback-on-my-work',
          innerText: 'Feedback on my work',
        },
        {
          value: 'inquiry-about-collaboration',
          innerText: 'Inquiry about collaboration',
        },
        {
          value: 'job-opportunity',
          innerText: 'Job opportunity',
        },
        {
          value: 'other',
          innerText: 'Other',
        },
      ],
    },
  },
  message: {
    label: {
      htmlFor: 'message',
      innerText: 'message',
    },
    textarea: {
      name: 'message',
      placeholder: 'Your message here...',
      maxLength: 3000,
      title: 'Required field, 3000 characters max',
    },
  },
  needToFollowBack: {
    label: {
      htmlFor: 'need-to-follow-up',
      innerText: 'Do you want to hear back from me?',
    },
    input: {
      name: 'need-to-follow-up',
      placeholder: 'Let me know what is the best way to contact you.',
      maxLength: 500,
      title: 'Optional field, 500 characters max',
    },
  },
} as const
