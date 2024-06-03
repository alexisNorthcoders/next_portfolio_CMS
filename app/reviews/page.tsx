import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ReviewForm from "../components/ReviewForm";
import prisma from "../lib/db";

async function getReviews() {
  const review = await prisma.reviews.findMany({
    select: {
      User: {
        select: {
          firstName: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });
}

export default function ReviewPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
      <h1 className="pt-5 text-4xl font-semibold lg:text-5xl">Reviews</h1>
      <p className="mt-2 leading-7 text-muted-foreground">Leave a Review!</p>

      <Card className="mt-10">
        <CardHeader className="flex w-full flex-col">
          <Label>Message</Label>
          <ReviewForm />
        </CardHeader>
      </Card>
    </section>
  );
}
