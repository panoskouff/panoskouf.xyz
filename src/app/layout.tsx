import '#/theme/globalStyles'
import { mulish, tinos } from '#/theme/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panagiotis Koufopoulos - Front End Developer',
  description:
    'I love everything TypeScript. Besides front end development, I am interested in Node.js and BaaS. My favorite framework is React.',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    url: 'https://panoskouf.xyz',
    title: 'Panagiotis Koufopoulos - Front End Developer',
    description:
      'I love everything TypeScript. Besides front end development, I am interested in Node.js and BaaS. My favorite framework is React.',
    images: [
      {
        url: '/images/projects/portfolio/portfolio-website-showcase-p-800.jpeg',
        alt: 'Panagiotis Koufopoulos - Front End Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/projects/portfolio/portfolio-website-showcase-p-800.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${mulish.variable} ${tinos.variable}`}>
      <body>{children}</body>
    </html>
  )
}
