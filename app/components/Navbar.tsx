import Link from "next/link";
export function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link href="/">
          <h1 className="text-3xl font-semibold"><span className="text-yellow-500">Ling Ling </span>Clown</h1>
        </Link>
      </div>
    </nav>
  );
}
