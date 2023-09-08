import MainLayout from '../mainLayout';

export default function ContactLayout(props: { children: React.ReactNode }) {
  return <MainLayout hero={props.children}></MainLayout>;
}
