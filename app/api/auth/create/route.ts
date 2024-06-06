import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import {unstable_noStore} from "next/cache"

export async function GET() {
  unstable_noStore()
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("No user found!");
  }

  let dbUSer = await prisma.user.findUnique({
    where:{
        id:user.id
    }
  })

  if (!dbUSer){
    dbUSer = await prisma.user.create({
        data:{
            id:user.id,
            firstName: user.given_name ?? "",
            lastName: user.family_name ?? "",
            email:user.email ?? "",
            profileImage:user.picture,
        }
    })
  }

  return NextResponse.redirect("http://localhost:3000/reviews")
}
