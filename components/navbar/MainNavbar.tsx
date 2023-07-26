"use client";

import React from "react";
import { Container, Logo, Searchbar, UserMenu } from "@/components";
import { SafeUser } from "@/interfaces";

interface Props {
  currentUser?: SafeUser | null;
}

const MainNavbar: React.FunctionComponent<Props> = ({ currentUser }) => {
  return (
    <header className="w-full fixed shadow-sm bg-white z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="flex flex-row items-center gap-3 justify-between
            md:gap-0"
          >
            <Logo />
            <Searchbar />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default MainNavbar;
