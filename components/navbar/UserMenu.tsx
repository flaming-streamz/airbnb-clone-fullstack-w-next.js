"use client";

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Avatar } from "..";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/use-register-modal";
import useLoginModal from "@/hooks/use-login-modal";

interface Props {}

const UserMenu: React.FunctionComponent<Props> = ({}) => {
  const registerModalState = useRegisterModal();
  const loginModalState = useLoginModal();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = React.useCallback(() => {
    setIsOpen((prevOpenState) => !prevOpenState);
  }, []);

  const handleClick = () => {};

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={handleClick}
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute rounded-sm shadow-sm w-[40vw] md:w-3/4 
        bg-white overflow-hidden right-0 top-12 text-sm"
        >
          <React.Fragment>
            <MenuItem label="Login" onClick={loginModalState.onOpen} />
            <MenuItem label="Sign up" onClick={registerModalState.onOpen} />
          </React.Fragment>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
