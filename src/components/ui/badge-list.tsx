
import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "tech" | "location";
  onClick?: () => void;
}

export function Badge({ 
  className, 
  children, 
  variant = "primary",
  onClick
}: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    tech: "bg-tech-100 text-tech-800 hover:bg-tech-200",
    location: "bg-hackathon-100 text-hackathon-800 hover:bg-hackathon-200",
  };
  
  return (
    <div 
      className={cn(
        baseStyles,
        variantStyles[variant],
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface BadgeListProps {
  items: string[];
  variant?: BadgeProps["variant"];
  className?: string;
  onClick?: (item: string) => void;
}

export function BadgeList({ items, variant = "primary", className, onClick }: BadgeListProps) {
  if (!items.length) return null;
  
  return (
    <div className={cn("flex flex-wrap gap-1", className)}>
      {items.map((item) => (
        <Badge 
          key={item} 
          variant={variant}
          onClick={onClick ? () => onClick(item) : undefined}
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}
