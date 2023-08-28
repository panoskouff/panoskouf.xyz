import MainLayout from '../mainLayout';

export default function HomeLayout(props: {
  hero: React.ReactNode;
  children: React.ReactNode;
}) {
  return <MainLayout {...props} />;
}
