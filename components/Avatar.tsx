"use client";

import Image from "next/image";
import React from "react";

interface Props {}

const Avatar: React.FunctionComponent<Props> = ({}) => {
  return (
    <Image
      className="rounded-full object-contain"
      src="/images/placeholder.jpg"
      alt="user-avatar"
      width="30"
      height="30"
    />
  );
};

export default Avatar;
