"use client";
import { MessageSquare, ArrowRight, ImageIcon, VideoIcon, Code, Settings, MessagesSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgcolor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgcolor: "bg-pink-700/10",
    href: "/image",
  },

  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgcolor: "bg-orange-700/10",
    href: "/video",
  },

  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgcolor: "bg-green-700/10",
    href: "/code",
  },

  {
    label: "Channel",
    icon: MessagesSquare,
    color: "text-blue-700",
    bgcolor: "bg-blue-700/10",
    href: "/servers/channels"
  },

  {
    label: "Settings",
    icon: Settings,
    bgcolor: "bg-zinc-700/10",
    href: "/settings",
  },


]

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div> 
        <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center">Have a Conversation with AI</h2>
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
              Choose a tool to get started with AI generation or view your settings. 
            </p>

            <div className="px-4 md:px-20 lg:px-32 space-y-4">
              {tools.map((tool) => (
                <Link href={tool.href} key={tool.href}>
                  <Card 
                    className="p-4 border-black/5 bg-white dark:bg-[#2d1455] flex items-center justify-between hover:shadow-md transition cursor-pointer"
                  >
                    <div className="flex items-center gap-x-4">
                      <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
                        <tool.icon className={cn("w-8 h-8", tool.color)} />
                      </div>
                      <div className="font-semibold">
                        {tool.label}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </Card>
                </Link>
              ))}
            </div>
        </div>
    </div>
  );
}

export default DashboardPage;