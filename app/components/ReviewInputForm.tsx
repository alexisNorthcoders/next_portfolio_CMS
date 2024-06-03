import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";

export default function ReviewInputForm() {
  return (
    <form className="flex flex-col justify-between gap-4 md:flex-row">
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
