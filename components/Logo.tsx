import Image from "next/image";
import React from "react";

interface Props {}

const Logo: React.FunctionComponent<Props> = ({}) => {
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      width="100"
      height="100"
      className="hidden cursor-pointer
  md:block"
    />
  );
};

export default Logo;
