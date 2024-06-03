import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ReviewForm() {
  const user = "";

  if (user) {
    return <div>This is my review!</div>;
  } else {
    return (
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <Input type="text" placeholder="Your review here..." />
        <Button>Submit Review</Button>
      </div>
    );
  }
}
