import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-[250px]"/>
            <Skeleton className="h-4 w-[200px]"/>
        </div>
      </div>
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-[50%]"/>
            <Skeleton className="h-4 w-[40%]"/>
        </div>
      </div>
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-[50%]"/>
            <Skeleton className="h-4 w-[40%]"/>
        </div>
      </div>
      <div className="flex w-full items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-[50%]"/>
            <Skeleton className="h-4 w-[40%]"/>
        </div>
      </div>
    </div>
  );
}
