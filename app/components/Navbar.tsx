"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SmallScreenMenu } from "./SmallScreenMenu";
import { ContactForm } from "./ContactForm";

export const navigationItems = [
  {
    name: "About me",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
];
export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="items-center mx-auto flex w-full max-w-7xl flex-row justify-between px-4 py-5 md:px-8">
      <div className="flex">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Alexis<span className="text-primary"> Creoulo</span>
          </h1>
        </Link>
      </div>
      <div className="hidden sm:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => {
              return (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      active={pathname === item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <div className="hidden sm:block">
          <Dialog>
            <DialogTrigger>
              <div className="group relative inline-block items-center justify-start overflow-hidden rounded-full bg-blue-600 px-5 py-3 font-medium transition-all hover:bg-white">
                <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                  Contact Me
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

        <div className="sm:hidden">
          <SmallScreenMenu />
        </div>
      </div>
    </nav>
  );
}
