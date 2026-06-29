import { AccommodationForm } from "@/components/admin/AccommodationForm"
export default async function EditLodgePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <AccommodationForm kind="lodges" id={id} />
}
