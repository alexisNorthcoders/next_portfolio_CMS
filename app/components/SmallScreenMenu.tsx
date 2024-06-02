import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function SmallScreenMenu(){
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4"/>
                </Button>
            </SheetTrigger>
        </Sheet>
    )
}