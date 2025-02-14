"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeButton } from "./ui/theme-button";

const routes = [
  { title: "How it works", href: "#how-it-works" },
  { title: "Who we help", href: "#who-we-help" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="p-4 flex justify-between items-center">
      <Link href={"/"} className="flex gap-2 items-center">
        <span className="font-semibold text-xl ">
          thesalespot.
        </span>
      </Link>

      <nav className="hidden md:flex gap-20 dark:text-white text-black hover:text-gray-900  ">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            onClick={(e) => handleScroll(e, route.href)}
            className="text-sm font-medium dark:text-white text-black hover:text-gray-900  "
          >
            {route.title}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex gap-2  ">
        <Link href={"/login"}>
          <Button variant="btn-secondary" className="p-1">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant="btn-primary" className="whitespace-nowrap">
            Sign Up
          </Button>
        </Link>
         <ThemeButton/>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 dark:text-white text-black ">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-lg font-medium dark:text-white text-black "
              >
                {route.title}
              </Link>
            ))}
            <Link href={"/login"}>
              <Button variant="btn-secondary" className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="btn-primary" className="w-full dark:text-white text-white ">
                Sign Up
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
