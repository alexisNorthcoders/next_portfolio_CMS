import Image from "next/image";
import bg from "../../public/bg.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import css from "../../public/skills/css-3.svg";
import boot from "../../public/skills/bootstrap.svg";
import express from "../../public/skills/express.svg";
import firebase from "../../public/skills/firebase.svg";
import html from "../../public/skills/html-5.svg";
import javascript from "../../public/skills/javascript.svg";
import jest from "../../public/skills/jest.svg";
import mongodb from "../../public/skills/mongodb-icon.svg";
import nodejs from "../../public/skills/nodejs.svg";
import openai from "../../public/skills/openai-icon.svg";
import psql from "../../public/skills/postgresql.svg";
import python from "../../public/skills/python.svg";
import react from "../../public/skills/react.svg";
import tailwind from "../../public/skills/tailwindcss-icon.svg";
import typescript from "../../public/skills/typescript-icon.svg";
import agile from "../../public/skills/agile.svg";
import tdd from "../../public/skills/tdd.png";
import pairProgramming from "../../public/skills/pairprogramming.jpeg";
import github from "../../public/skills/github-icon.svg";
import linkedin from "../../public/linkedin.svg";

import { Button } from "@/components/ui/button";

const skills = [
  {
    title: "CSS",
    icon: css,
    description: "Proficient in styling webpages using CSS.",
  },
  {
    title: "JavaScript",
    icon: javascript,
    description:
      "Extensive use of JavaScript for dynamic and interactive web development.",
  },
  {
    title: "Node.js",
    icon: nodejs,
    description:
      "Utilizing Node.js for server-side scripting and backend development.",
  },
  {
    title: "Bootstrap",
    icon: boot,
    description:
      "Utilizing Bootstrap components for responsive web development.",
  },
  {
    title: "Express",
    icon: express,
    description: "Building RESTful APIs and web applications with Express.js.",
  },
  {
    title: "Firebase",
    icon: firebase,
    description:
      "Leveraging Firebase for authentication, real-time chat, databases, and cloud storage.",
  },
  {
    title: "GitHub",
    icon: github,
    description: "Version control and collaboration using GitHub.",
  },
  {
    title: "HTML",
    icon: html,
    description: "Proficient in creating structured webpages with HTML5.",
  },

  {
    title: "Jest",
    icon: jest,
    description:
      "Applying Test-Driven Development (TDD) methodology with Jest for robust testing.",
  },
  {
    title: "MongoDB",
    icon: mongodb,
    description: "Expertise in using MongoDB for database management.",
  },

  {
    title: "OpenAI",
    icon: openai,
    description:
      "Experience with OpenAI API, particularly in prompt engineering.",
  },
  {
    title: "PostgreSQL",
    icon: psql,
    description:
      "Proficient in database management with PostgreSQL, including hosting, testing, and maintenance.",
  },
  {
    title: "Python",
    icon: python,
    description:
      "Utilizing Python for scripting, data analysis, and solving various problems.",
  },
  {
    title: "React",
    icon: react,
    description:
      "Extensive experience in building web and mobile applications using React.",
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
    description:
      "Applying Tailwind CSS for efficient and customizable styling of webpages.",
  },
  {
    title: "TypeScript",
    icon: typescript,
    description:
      "Implementing type safety and improved code maintainability with TypeScript.",
  },
  {
    title: "Pair Programming",
    icon: pairProgramming,
    description:
      "Proficient in collaborative programming techniques, working closely with team members to solve problems, share knowledge, and produce high-quality code.",
  },
  {
    title: "Test-Driven Development (TDD)",
    icon: tdd,
    description:
      "Skilled in Test-Driven Development (TDD) practices, writing tests before code to ensure code quality, maintainability, and functionality.",
  },

  {
    title: "Agile Methodologies",
    icon: agile,
    description:
      "Adaptable to Agile methodologies, including Scrum and Kanban, to facilitate iterative development, collaboration, and continuous improvement within cross-functional teams.",
  },
];
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
];
export function MiddleSection() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="relative col-span-1 w-full">
        <Image
          src={bg}
          alt="abstract image"
          className="h-full w-full rounded-2xl object-cover"
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
            {skills.map((skill, index) => (
              <div key={`${skill.title}${index}`} className="flex flex-col items-center justify-center">
                <Image
                  key={index}
                  src={skill.icon}
                  alt={skill.description}
                  className="h-16 w-16"
                />
                <p key={`${index}${skill.title}`}className="text-muted-foreground">{skill.title}</p>
              </div>
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
