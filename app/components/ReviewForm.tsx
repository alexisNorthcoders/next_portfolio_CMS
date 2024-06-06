import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ReviewInputForm from "./ReviewInputForm";

export default async function ReviewForm() {
  const {getUser} = getKindeServerSession()
  const user = await getUser()

  if (user) {
    return <ReviewInputForm/>
  } else {
    return (
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <Input disabled type="text" placeholder="Leave your review..." />
        <RegisterLink>
        <Button className="w-full">Sign in to review</Button>
        </RegisterLink>
      </div>
    );
  }
}