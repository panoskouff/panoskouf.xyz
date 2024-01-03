import { Center, Space } from '#/atoms'
import { ProjectImagesThumbnail } from '#/components/ProjectImagesThumbnail'
import { SectionContainer } from '#/components/SectionContainer'

const TestComponent = ProjectImagesThumbnail

const TestPage = () => {
  return (
    <>
      <Space h='15vh' />
      <SectionContainer>
        <Center>
          <TestComponent />
        </Center>
      </SectionContainer>
    </>
  )
}

export default TestPage
