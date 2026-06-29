import { DestinationForm } from "../DestinationForm"
export default async function EditDestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <DestinationForm id={id} />
}
