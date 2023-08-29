import MainLayout from '../../mainLayout';

import { AspectRatioImage, Positioned, Space } from '#/atoms';
import { ProjectHighlightIntro } from '#/components/ProjectHighlightIntro';
import { styled } from '#/styled-system/jsx';

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  console.log(params);
  return (
    <MainLayout
      hero={
        <>
          <styled.div h='15vh' />
          <ProjectHighlightIntro
            title='Graphical User Interface'
            description='Web-based Graphical User Interface for the Hippalus Exploratory
Search System. A UI reimplementation for the Hippalus Exploratory
Search System as a single page application written from scratch.'
            projectUrl='https://my-thesis.vercel.app/dataset/2'
          />
          <Space h='sp-lg' />
          <Positioned
            pos='relative'
            top='0'
            left='50%'
            css={{ maxW: 928, transform: 'translateX(-50%)' }}
          >
            <AspectRatioImage
              src='https://panoskouf.xyz/images/projects/spa-hippalus/thesis-showcase-1.jpg'
              width={1440}
              height={5873}
            />
          </Positioned>
        </>
      }
    />
  );
}
