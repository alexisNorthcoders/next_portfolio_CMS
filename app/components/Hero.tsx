import { ContactForm } from "./ContactForm";

export function Hero() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="col-span-1 h-full min-h-[500px] rounded-2xl bg-gray-100 p-8 md:col-span-2 md:min-h-[300px]">
        <h1 className="text-4xl font-medium md:text-6xl">Hi! I'm Alexis</h1>
        <h2 className="mt-3 mb-3 text-2xl font-normal md:text-4xl">
          Software Developer
        </h2>
        <a
          href="#_"
          className="group relative inline-block px-4 py-2 font-medium"
        >
          <span className="rounded-lg absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="rounded-lg absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Let's Connect!
          </span>
        </a>
      </div>
      <ContactForm/>
    </div>
  );
}
