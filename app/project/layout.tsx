import MainLayout from '../mainLayout';

export default function ProjectLayout(props: {
  hero: React.ReactNode;
  children: React.ReactNode;
}) {
  return <MainLayout {...props} />;
}
