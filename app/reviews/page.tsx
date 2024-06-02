import { Card,CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function ReviewPage(){
    return(
        <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">

            <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Reviews</h1>
            <p className="leading-7 text-muted-foreground mt-2">Leave a Review!</p>

            <Card className="mt-10">
                <CardHeader className="flex flex-col w-full">
                    <Label>Review message</Label>
                </CardHeader>
            </Card>
        </section>
    )
}