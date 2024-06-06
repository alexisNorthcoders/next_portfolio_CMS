"use client"
import Link from "next/link";
import { navigationItems } from "./Navbar";

export function Footer() {
  return (
    <footer className="mb-1">
      <ul className="flex flex-wrap justify-center">
        {navigationItems.map((item, index) => (
          <div key={index} className="px-5 py-2">
            <Link href={item.href} className="text-muted-foreground">
            | {item.name} |
            </Link>
          </div>
        ))}
      </ul>
      <p className="text-center text-muted-foreground text-sm">&copy; Alexis 2024</p>
    </footer>
  );
}
