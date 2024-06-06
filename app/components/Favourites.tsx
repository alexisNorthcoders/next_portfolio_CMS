import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) [0...2]{
        title,
          _id,
          link,
          description,
              tags,
          "imageUrl":image.asset -> url
      }`;
  try {
    const projects = await client.fetch(query, {}, {next:{revalidate:30}});
    return projects;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function Favourites() {
  const projects: ProjectsCard[] = await getProjects();
  return (
    <div className="gric-cols-1 grid gap-4 py-10 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
      {projects.map((project) => (
        <a
          key={project._id}
          href={project.link}
          className="group block"
          target="_blank"
        >
          <div className="aspect-h-12 aspect-w-16 relative overflow-hidden rounded-2xl">
            <Image
              src={project.imageUrl}
              alt="Project image"
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold hover:underline">
              {project.title}
            </h2>
            <p className="mt-1 line-clamp-3 text-justify text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => {
                return (
                  <span
                    className="inline-flex items-center rounded-md bg-primary/10 px-1 py-1 text-xs font-medium text-primary ring-2 ring-inset ring-primary/10 sm:text-sm"
                    key={index}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
