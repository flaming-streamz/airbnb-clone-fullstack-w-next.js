"use client";

import React from "react";

interface ClientComponentOnlyProps {
  children: React.ReactNode;
}

const ClientComponentOnly = (props: ClientComponentOnlyProps) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  // if component hasn't mounted yet, return null to eliminate hydration errors
  if (!hasMounted) return null;

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default ClientComponentOnly;
