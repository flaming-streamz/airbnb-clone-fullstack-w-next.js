import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {}

const Logo: React.FunctionComponent<Props> = ({}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      width="100"
      height="100"
      className="hidden cursor-pointer   md:block"
      onClick={handleClick}
    />
  );
};

export default Logo;
