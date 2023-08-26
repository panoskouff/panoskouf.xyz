import HeroContentFooterLayout from '../heroContentFooterLayout';

export default function MainLayout(props: {
  hero: React.ReactNode;
  children: React.ReactNode;
}) {
  return <HeroContentFooterLayout {...props} />;
}
