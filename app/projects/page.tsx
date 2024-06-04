import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getProjects() {
  
  const query = `*[_type == "project"]{
    title,
      _id,
      link,
      description,
          tags,
      "imageUrl":image.asset -> url
  }`;
  try {
    const data = await client.fetch(query);
    console.log(data, "this is the fetched projects")
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Projects() {
 const data: ProjectsCard[] = await getProjects()

  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
      <h1 className="text-4xl font-semibold lg:text-5xl">Projects</h1>
      <p className="mt-2 leading-7 text-muted-foreground">
        Check out my projects
      </p>
      <div className="grid grid-cols-1 gap-4 py-12 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
       
       {data.map((project) => {
          console.log(project.description);
          return (
            <a
              key={project._id}
              href={project.link}
              className="group block"
              target="_blank"
            >
              <div className="aspect-w-16 aspect-h-12 relative overflow-hidden rounded-2xl">
                <Image src={project.imageUrl} alt="Project image" fill />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
