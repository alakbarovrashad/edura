import React from "react";

import { FieldDescription } from "@/components/ui/field";
import Link from "next/link";

import Logo from "@/components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo />
        <div className="flex flex-col gap-6">
          {children}
          <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our{" "}
            <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy</Link>.
          </FieldDescription>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
