"use client"
import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import { postReview } from "../actions";
import { useRef } from "react";

export default function ReviewInputForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await postReview(formData);
        formRef.current?.reset();
      }}
      className="flex flex-col justify-between gap-4 md:flex-row"
    >
      <Input
        type="text"
        name="review"
        maxLength={80}
        minLength={1}
        placeholder="Your review here..."
        required
      />
      <SubmitButton />
    </form>
  );
}
