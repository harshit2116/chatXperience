"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Server {
  id: string;
  name: string;
}

interface ServerNameProps {
  server: Server;
}

export const ServerName: React.FC<ServerNameProps> = ({ server }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/servers/${server.id}`);
  };

  return (
    <div className="ml-2" onClick={handleClick}>
      {server.name}
    </div>
  );
};
