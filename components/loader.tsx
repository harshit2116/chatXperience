import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-16 h-16 relative">
        <Image alt="Logo" src="/loader.gif" fill />
      </div>
      <p className="text-sm text-muted-foreground">
        With this I summon the power of AI...
      </p>
    </div>
  );
};
