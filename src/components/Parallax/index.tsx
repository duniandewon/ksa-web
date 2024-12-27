import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Parallax {
  children: ReactNode;
  bgUrl?: string;
  className?: string;
}

export default function Parallax({
  children,
  className = "",
  bgUrl,
}: Parallax) {
  const bgStyle = bgUrl ? { backgroundImage: `url('${bgUrl}')` } : undefined;
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover",
        !bgUrl && "bg-secondary",
        className
      )}
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-20">
      {children}
      </div>
    </div>
  );
}
