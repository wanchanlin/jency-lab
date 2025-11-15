import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CustomButtonProps {
  href?: string;
  text: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  children?: ReactNode;
  asChild?: boolean;
}

export default function CustomButton({
  href,
  text,
  variant = "default",
  size = "default",
  className,
  icon: Icon,
  iconPosition = "right",
  onClick,
  children,
  asChild = false,
}: CustomButtonProps) {
  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && <Icon className="mr-2 h-5 w-5" />}
      {children || text}
      {Icon && iconPosition === "right" && <Icon className="ml-2 h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <Button size={size} variant={variant} className={className} asChild>
        <Link href={href}>{buttonContent}</Link>
      </Button>
    );
  }

  return (
    <Button size={size} variant={variant} className={className} onClick={onClick} asChild={asChild}>
      {buttonContent}
    </Button>
  );
}
