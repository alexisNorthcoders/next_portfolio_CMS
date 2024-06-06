"use client"
import { Input } from "@/components/ui/input";
import SubmitButton from "./SubmitButton";
import { postReview } from "../actions";
import { useRef } from "react";

export default function ReviewInputForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (<>
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
    <a href="https://next-portfolio-cms.vercel.app/api/auth/logout" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group w-fit">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Sign out</span>
    </a>
    </>
  );
}
