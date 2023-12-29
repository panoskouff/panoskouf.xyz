import MainLayout from '../../mainLayout'
// import { Project } from '../../../types/data';
import { AspectRatioImage, Position, Space } from '#/atoms'
import { ProjectHighlightIntro } from '#/components/ProjectHighlightIntro'
import { styled } from '#/styled-system/jsx'
import { projects as data } from '#/app/api/data'
import { css } from '#/styled-system/css'

const imageStyles = css({
  boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.15)',
  borderRadius: 'lg',
})

type ProjectPageProps = {
  params: { slug: string }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // @todo - my future api
  // const project: { data: Project } = await fetch(
  //   `http://localhost:3000/api/projects/${params.slug}`
  // ).then((res) => res.json());

  const project = data.find((project) => project.slug === params.slug)

  if (!project) {
    // this never happens because of the generateStaticParams function
    return <div>There is not a project with this slug</div>
  }

  const { title, description, projectUrl, githubUrl, image } = project

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
          <Position
            pos='relative'
            top='0'
            left='50%'
            css={{ maxW: 928, transform: 'translateX(-50%)' }}
          >
            <AspectRatioImage
              src={image.src}
              width={image.width}
              height={image.height}
              className={imageStyles}
            />
          </Position>
        </>
      }
    />
  )
}

export async function generateStaticParams() {
  // @todo - my future api
  // const projects: { data: Project[] } = await fetch(
  //   'http://localhost:3000/api/projects'
  // ).then((res) => res.json());

  return data.map((project) => ({ slug: project.slug }))
}
