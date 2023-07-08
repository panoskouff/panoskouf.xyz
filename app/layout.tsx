import '../styles/css-reset.css';
import '../styles/theme.css';
import '../styles/globals.css';
import { mulish } from '@/fonts';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mulish.className}>{children}</body>
    </html>
  );
}