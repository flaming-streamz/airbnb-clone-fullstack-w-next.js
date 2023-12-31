// 'use client'

import React from "react";

interface Props {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FunctionComponent<Props> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
      {label}
    </div>
  );
};

export default MenuItem;
