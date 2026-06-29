import { ExperienceForm } from "../ExperienceForm"
export default async function EditExperiencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ExperienceForm id={id} />
}
