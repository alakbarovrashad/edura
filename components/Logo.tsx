import React from "react";
import Link from "next/link";

import { BookOpen } from "lucide-react";
import { CompanyData } from "@/data/Company";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-2 self-center font-medium">
      <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
        <BookOpen className="size-5" />
      </div>
      <span className={cn(className, "uppercase font-bold")}>
        {CompanyData.name}
      </span>
    </Link>
  );
};

export default Logo;
