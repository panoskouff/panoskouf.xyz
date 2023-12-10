import { Space } from '#/atoms'
import { ProjectHighlightCard } from '#/components/ProjectHighlightCard'
import { SectionContainer } from '#/components/SectionContainer'
import { projects as data } from '#/app/api/data'
// import { Project } from '#/types/data';

export default function HomeContent() {
  // @todo - my future api
  // static rendering is the default
  //  --> https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default
  // const projects: { data: Project[] } = await fetch(
  //   'http://localhost:3000/api/projects'
  // ).then((res) => res.json());

  return (
    <SectionContainer css={{ pos: 'relative' }}>
      <Space h='sp-lg' />
      <Space h='sp-xl' />
      {data.flatMap((project, index, array) => {
        const isLastProject = index === array.length - 1

        return [
          <ProjectHighlightCard
            key={project.slug}
            kicker={project.kicker}
            title={project.title}
            description={project.description}
            tags={project.tags}
            projectUrl={`/projects/${project.slug}`}
            imageUrl={project.cardImageUrl}
          />,
          ...(!isLastProject
            ? [
                <Space h='sp-xl' key={`space1-${project.slug}`} />,
                <Space h='sp-xl' key={`space2-${project.slug}`} />,
              ]
            : []),
        ]
      })}
      <Space h='sp-md' />
      <Space h='sp-lg' />
    </SectionContainer>
  )
}
