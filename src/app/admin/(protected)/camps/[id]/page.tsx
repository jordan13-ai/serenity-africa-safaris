import { AccommodationForm } from "@/components/admin/AccommodationForm"
export default async function EditCampPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <AccommodationForm kind="camps" id={id} />
}
