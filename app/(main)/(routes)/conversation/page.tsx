import React from "react";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Have a conversation with AI"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgcolor="bg-violet-500/10"
      />
    </div>
  );
};
export default ConversationPage;
