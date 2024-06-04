import { Skeleton } from "@/components/ui/skeleton";

export function LoadingReviews() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
export function LoadingReviewForm() {
  return (
    <div className="w-full">
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  );
}
