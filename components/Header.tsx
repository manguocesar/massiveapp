import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";
import React from "react"

const Header = async () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" height="0" width="0"
          sizes="100vw"
          className="w-full h-auto" />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <form
            action={
              async () => {
                "use server";
                await signOut();
              }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;