"use client";

import Link from "next/link";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

import { cn } from "@/lib/utils";

import {
  Plus,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  VideoIcon,
  Code,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

const routes = [

  {
    label: "Create a Server",
    icon: Plus,
    href: "/components/modals/create-server-modal",
    color: "text-emerald-500",
  },

  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },

  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-700",
  },

  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },

  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];


export const NavigationAction = () => {
  const { onOpen } = useModal();
  const pathname = usePathname();

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href === "/components/modals/create-server-modal") {
      e.preventDefault();
      onOpen("createServer");
    }
  };

  return (
    <div>
      <div className="space-y-1">
        {routes.map((route) => (
          <Link 
            key={route.href} 
            href={route.href}
            onClick={(e) => handleLinkClick(route.href, e)}
            className={cn(
              "text-sm gourp flex p-3 w-full rounded-md justify-start font-medium cursor-pointer hover:bg-zinc-700/10 dark:hover:bg-purple-700/50 transition mb-1",
              pathname === route.href ? "bg-zinc-700/20 dark:bg-purple-500" : ""
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};