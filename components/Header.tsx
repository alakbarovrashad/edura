"use client";

import React from "react";
import Logo from "./Logo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Menu, Search, User } from "lucide-react";
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
import Link from "next/link";

const Header = () => {
  const [Auth, setAuth] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 pb-5">
      <div className="flex items-center justify-between py-3">
        <Logo className="max-md:hidden" />

        <nav className="flex max-w-max flex-1 items-center justify-center max-md:hidden">
          <ul className="group flex flex-1 list-none items-center justify-center gap-7">
            <li className="text-muted-foreground">
              <a href="#">Home</a>
            </li>
            <li className="text-muted-foreground">
              <a href="#">Marketing</a>
            </li>
            <li className="text-muted-foreground">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden max-md:block text-muted-foreground">
            <Search />
          </div>
          {Auth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      setAuth(false);
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/login">
                <User />
                <span className="max-md:hidden">Login / Register</span>
              </Link>
            </Button>
          )}

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

      <div className="flex items-center justify-between py-3 max-md:hidden">
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
  );
};

export default Header;
