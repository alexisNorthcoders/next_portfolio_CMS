import { ContactForm } from "./ContactForm";
import photo from "../../public/photopark.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function Hero() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="col-span-1 h-full rounded-2xl bg-gray-100 p-8 md:col-span-2 ">
        <h1 className="text-4xl font-medium md:text-6xl">Hi! I'm Alexis </h1>
        <h2 className="mb-3 mt-3 text-xl font-normal md:text-2xl text-justify">
          👋 I'm a software developer on a mission to create tech magic ✨. From crafting sleek interfaces to weaving complex algorithms, I'm here to turn your dreams into digital reality! 💻</h2>
        <Dialog>
          <DialogTrigger>
            <div className="group relative inline-block px-4 py-2 font-medium">
              <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded-lg bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full rounded-lg border-2 border-black bg-white group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Let's Connect!
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
      </div>
      <Image
        priority
        src={photo}
        alt="my photo"
        className="col-span-1 h-full rounded-2xl bg-gray-100 object-cover"
      />
    </div>
  );
}
