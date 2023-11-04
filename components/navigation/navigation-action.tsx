"use client";

import Link from "next/link";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

import { cn } from "@/lib/utils";

import { Plus, ImageIcon, LayoutDashboard, MessageSquare, VideoIcon, Code, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const routes = [
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

  return (
    <div>
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center text-sm p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition"
        >
        <div className="flex items-center flex-1">
          <Plus
            className="h-5 w-5 mr-3  text-emerald-500"
            size={20}
          />
          <span>Create a Server</span>
          </div>
        </button>

      <div className="space-y-1">
        {routes.map(route => (
          <Link
            key={route.href}
            href={route.href}
            className = {cn("text-sm gourp flex p-3 w-full justify-start font-medium cursor-pointer hover: dark:text-white text-black hover:bg-white/10 rounded-lg transition",
            pathname === route.href 
            
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
  )
}