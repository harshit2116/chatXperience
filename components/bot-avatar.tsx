import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-16 w-16">
      <AvatarImage className="p-1" src="/avatar.png" />
    </Avatar>
  );
};