import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ReviewForm from "../components/ReviewForm";
import prisma from "../lib/db";
import { Suspense } from "react";
import { LoadingReviews, LoadingReviewForm } from "../components/Loading";

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
  return review;
}

async function Reviews() {
  const reviews = await getReviews();

  if (reviews.length === 0) {
    return null;
  } else {
    return reviews.map((review) => {
      return (
        <li key={review.id}>
          <div className="flex items-center">
            <img
              src={review.User?.profileImage as string}
              alt="User profile image"
              className="h-10 w-10 rounded-lg"
            />
            <p className="break-words pl-3 text-muted-foreground">
              {review.User?.firstName}:{" "}
              <span className="text-foreground">{review.message}</span>
            </p>
          </div>
        </li>
      );
    });
  }
}

export default function ReviewPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
      <h1 className="pt-5 text-4xl font-semibold lg:text-5xl">Reviews</h1>
      <p className="mt-2 leading-7 text-muted-foreground">Leave a Review!</p>
      <Card className="mt-10">
        <CardHeader className="flex w-full flex-col">
          <Label className="mb-1">Message</Label>
          <Suspense fallback={<LoadingReviewForm />}>
            <ReviewForm />
          </Suspense>
          <ul className="flex flex-col gap-y-5 pt-7">
            <Suspense fallback={<LoadingReviews />}>
              <Reviews />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
}
