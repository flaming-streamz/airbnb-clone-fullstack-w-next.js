/**
 * Box container is to help limit the maximum size of the webiste expecially on large screen sizes.
 */

"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const BoxContainer: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div
      className="w-full max-w-[2520px] mx-auto
  xl:px-20 md:px-10 sm:px-2 px-4
  "
    >
      {children}
    </div>
  );
};

export default BoxContainer;
