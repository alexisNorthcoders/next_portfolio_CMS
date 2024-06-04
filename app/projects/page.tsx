import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getProjects(){
  const query =`*[_type == "project"]{
    title,
      _id,
      link,
      description,
          tags,
      "imageUrl":image.asset -> url
  }`
  const data = await client.fetch(query)
  return data
}


export default async function Projects() {
  const data: ProjectsCard = await getProjects()
  return <section className="mx-auto w-full max-w-7xl px-4 md:px-8">
    <h1 className="text-4xl font-semibold lg:text-5xl">Projects</h1>
    <p className="leading-7 text-muted-foreground mt-2">Check out my projects </p>
  </section>;
}
