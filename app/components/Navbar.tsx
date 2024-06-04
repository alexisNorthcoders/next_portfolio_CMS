"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SmallScreenMenu } from "./SmallScreenMenu";

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
    <nav className="mx-auto flex w-full max-w-7xl flex-row justify-between px-4 py-5 md:px-8">
      <div className="flex">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Max<span className="text-yellow-500"> Cloonie</span>
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
        <Button className="hidden sm:block">Contact Me</Button>
        <div className="sm:hidden">
          <SmallScreenMenu />
        </div>
      </div>
    </nav>
  );
}
