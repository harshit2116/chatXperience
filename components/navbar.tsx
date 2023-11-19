import { ChevronLeft } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';

import { Button } from "./ui/button";

export const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <Link href="/servers/channels">
                <Button variant="ghost" size="icon" className="md:hidden"> 
                    <span><ChevronLeft /></span>
                    <span>Return</span>
                </Button>
            </Link>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/> 
            </div>
        </div>
    );
}