import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import { postReview } from "../actions";

export default function ReviewInputForm() {
  return (
    <form action={postReview} className="flex flex-col justify-between gap-4 md:flex-row">
      <Input
        type="text"
        name="review"
        maxLength={80}
        minLength={1}
        placeholder="Your review here..."
        required
      />
      <SubmitButton/>
    </form>
  );
}
