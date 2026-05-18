import { ReviewForm } from "../ReviewForm"
export default async function EditReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ReviewForm reviewId={id} />
}
