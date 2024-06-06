import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import photo from "../../public/lastphoto.jpg"
import Image from "next/image";

export function About() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="col-span-1 border-none bg-gray-100 p-8 md:col-span-2 text-justify">
        <h1 className="text-4xl md:text-6xl">Passionate software developer</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">👋 I was introduced to computers at a young age and have since developed a deep fascination for coding and its potential to create and innovate. While my professional journey led me to the food industry, where I honed my skills in team leadership, time management, and problem-solving, Iu&apos;m now embracing the software development industry with dedication. Iu&apos;m here to solve your problems with creativity and precision, ready to bring your ideas to life through code! 💻✨</p>
        <Dialog>
          <DialogTrigger>
            <div className="group relative inline-block mt-3 px-4 py-2 font-medium">
              <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded-lg bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full rounded-lg border-2 border-black bg-white group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Letu&apos;s Connect!
              </span>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Fill this form to send me a message!</DialogTitle>

              <ContactForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Card>
      <div className="col-span-1">
        <Image src={photo} alt="beach photo" className="h-[500px] object-cover rounded-lg w-full"/>
      </div>
    </div>
  );
}
