import React from "react";
import Logo from "./Logo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Menu, Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Logo className="max-md:hidden" />
          <nav className="flex max-w-max flex-1 items-center justify-center max-md:hidden">
            <div className="relative">
              <ul className="group flex flex-1 list-none items-center justify-center gap-7">
                <li className="relative text-muted-foreground">
                  <a href="#">Home</a>
                </li>
                <li className="relative text-muted-foreground">
                  <a href="#">Marketing</a>
                </li>
                <li className="relative text-muted-foreground">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex items-center">
            <Button variant={"link"} className="hidden max-md:block">
              <Search />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden max-md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>
                    <Menu />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Home</DropdownMenuItem>
                    <DropdownMenuItem>Marketing</DropdownMenuItem>
                    <DropdownMenuItem>Contact</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Projects</DropdownMenuItem>
                    <DropdownMenuItem>Sales</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Tasks</DropdownMenuItem>
                    <DropdownMenuItem>Blog</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <hr />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 max-md:hidden">
          <div className="text-muted-foreground flex items-center gap-7 font-medium">
            <a href="#" className="hover:text-foreground">
              Projects
            </a>
            <a href="#" className="hover:text-foreground">
              Sales
            </a>
            <a href="#" className="hover:text-foreground">
              Team
            </a>
            <a href="#" className="hover:text-foreground">
              Tasks
            </a>
            <a href="#" className="hover:text-foreground">
              Blog
            </a>
          </div>

          <div className="text-muted-foreground flex items-center gap-2">
            <Input type="text" placeholder="Type here" />
            <Button>
              <Search />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
