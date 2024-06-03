"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prisma from "./lib/db"
import { revalidatePath } from "next/cache"

export async function postReview(formData: FormData){
    const {getUser}= getKindeServerSession()
    const user = await getUser()

    if (!user){
        throw new Error("User not found.")
    }
    const reviewMessage = formData.get("review") as string

    await prisma.reviews.create({
        data:{
            userId: user.id,
            message:reviewMessage
        }
    })
    revalidatePath("/reviews")
}