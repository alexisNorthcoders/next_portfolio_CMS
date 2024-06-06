import Image from "next/image";
import bg from "../../public/bg.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import figma from "../../public/stack/figma.svg";
import chatgpt from "../../public/stack/chatgpt.svg";
import cloud from "../../public/stack/creativecloud.svg";
import github from "../../public/stack/github.svg";
import slack from "../../public/stack/slack.svg";
import discord from "../../public/stack/discord.svg";
import chrome from "../../public/stack/chrome.svg";
import linkedin from "../../public/linkedin.svg";
import twitter from "../../public/twitter.svg";
import { Button } from "@/components/ui/button";

const icons = [figma, chatgpt, cloud, github, slack, discord, chrome];
const social = [
  {
    id: 1,
    icon: linkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/alexis-creoulo-935534213/",
  },
  {
    id: 2,
    icon: github,
    name: "GitHub",
    link: "https://github.com/alexisNorthcoders",
  },
  {
    id: 3,
    icon: twitter,
    name: "X/Twitter",
    link: "",
  },
];
export function MiddleSection() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="relative col-span-1 w-full">
        <Image
          src={bg}
          alt="abstract image"
          className="h-[400px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="col-span-1 flex w-full flex-col gap-4 md:col-span-2">
        <Card className="border-none bg-gray-100">
          <CardHeader>
            <CardTitle>My Experience</CardTitle>
            <CardDescription>
              These are the tools I use frequently
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="Icon of the stack"
                className="h-16 w-16"
              />
            ))}
          </CardContent>
        </Card>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {social.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col items-center border-none bg-gray-100 p-4 sm:items-start"
            >
              <Image
                src={item.icon}
                alt={`Icon of ${item.name}`}
                className="h-12 w-12"
              />
              <h1 className="pt-3 text-2xl font-medium">{item.name}</h1>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link} target="_blank">
                  Follow me
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
