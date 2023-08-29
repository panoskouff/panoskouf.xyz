import MainLayout from '../../mainLayout';
import { Project } from '../../../types/data';
import { AspectRatioImage, Positioned, Space } from '#/atoms';
import { ProjectHighlightIntro } from '#/components/ProjectHighlightIntro';
import { styled } from '#/styled-system/jsx';

type ProjectPageProps = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  // see comment below
  const project: { data: Project } = await fetch(
    `http://localhost:3000/api/projects/${params.slug}`
  ).then((res) => res.json());

  const { title, description, projectUrl, githubUrl, image } = project.data;

  return (
    <MainLayout
      hero={
        <>
          <styled.div h='15vh' />
          <ProjectHighlightIntro
            title={title}
            description={description}
            projectUrl={projectUrl}
          />
          <Space h='sp-lg' />
          <Positioned
            pos='relative'
            top='0'
            left='50%'
            css={{ maxW: 928, transform: 'translateX(-50%)' }}
          >
            <AspectRatioImage
              src={image.src}
              width={image.width}
              height={image.height}
            />
          </Positioned>
        </>
      }
    />
  );
}

export async function generateStaticParams() {
  /* @todo fix, this approach will fail during build
  time in production as there is no server running
  to serve these requests, I should just read the data
  directly here and do this once th headless cms is configured */

  const projects: { data: Project[] } = await fetch(
    'http://localhost:3000/api/projects'
  ).then((res) => res.json());

  return projects.data.map((project) => ({ slug: project.slug }));
}
