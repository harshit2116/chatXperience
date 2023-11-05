import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 mb-4">
      {type === "channel" && (
        <div className="h-24 w-24 rounded-full bg-zinc-500 dark:bg-purple-500 flex items-center justify-center">
          <Hash className="h-12 w-12 text-white" />
        </div>
      )}
      <p className="text-3xl font-bold text-zine-600 dark:text-purple-200">
        {type === "channel" ? "Welcome to #" : ""}
        {name}
      </p>
      <p className="text-zinc-600 dark:text-purple-200 text-sm text-center">
        {type === "channel"
          ? `This is the start of the #${name} channel.`
          : `This is the start of your conversation with ${name}`}
      </p>
    </div>
  );
};
