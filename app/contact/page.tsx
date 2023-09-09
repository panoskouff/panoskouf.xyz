import { styled } from '#/styled-system/jsx';
import { Text, Space } from '#/atoms';

export default function Contact() {
  return (
    <div>
      <Space h='sp-md' />
      <Text textStyle='title'>Get in Touch</Text>
      <Space h='sp-md' />
      <styled.form display='flex' flexDirection='column'>
        <label htmlFor='username'>Your Name:</label>
        <input type='text' name='username' placeholder='Anonymous' />
        <Space h='sp-sm' />
        <label htmlFor='reasonForContact'>Reason for contact:</label>
        <select name='reasonForContact'>
          <option value='feedback-on-my-work'>Feedback on my work</option>
          <option value='inquiry-about-collaboration'>
            Inquiry about collaboration
          </option>
          <option value='job-opportunity'>Job opportunity</option>
          {/* <option value='random-message'>Random Message / whatever</option> */}
          {/* <option value='meme'>I need to share this meme with you !</option> */}
          <option value='other'>Other</option>
        </select>
        <Space h='sp-sm' />
        <label htmlFor='message'>Message:</label>
        <textarea name='message' rows={10} placeholder='Your Message Here..' />
        <Space h='sp-sm' />
        <label htmlFor='email'>
          Leave optionally your email in case you want to hear back from me
        </label>
        <input type='email' name='email' />
      </styled.form>
    </div>
  );
}

// https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#convention
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
// https://www.youtube.com/watch?v=czvSZqnpTHs

// const myFormData = {
//   testName: '',
// };

// export default function Contact() {
//   async function handleSubmit(data: FormData) {
//     'use server';
//     const myData = data.get('testName') as string;
//     console.log({ myData });
//     myFormData.testName = myData;
//   }

//   return (
//     <div>
//       <h1>Contact 🔥</h1>
//       <form action={handleSubmit}>
//         <input type='text' name='testName' />
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   );
// }
