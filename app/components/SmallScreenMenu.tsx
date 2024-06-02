import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./Navbar";
import Link from "next/link";

export function SmallScreenMenu(){
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4"/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="mt-5 flex px-2 space-y-1 flex-col">
                    {navigationItems.map((item,index)=>{
                        return (
                            <Link key={index} href={item.href}>
                                    {item.name}
                            </Link>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}