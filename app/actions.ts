"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prisma from "./lib/db"

export async function postReview(formdata: FormData){
    const {getUser}= getKindeServerSession()
    const user = await getUser()

    if (!user){
        throw new Error("User not found.")
    }
    const reviewMessage = formdata.get("review") as string

    await prisma.reviews.create({
        data:{
            userId: user.id,
            message:reviewMessage
        }
    })
}