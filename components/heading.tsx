import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgcolor?: string;
}

export const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgcolor,
}: HeadingProps) => {
  return <div>Heading Component</div>;
};