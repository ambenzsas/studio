import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 40"
      className={cn("h-8 w-auto", props.className)}
      {...props}
    >
      <text 
        x="0" 
        y="30" 
        fontFamily="Inter, sans-serif" 
        fontSize="30" 
        fontWeight="800"
        className="fill-foreground"
      >
        distrimercedes
      </text>
    </svg>
  );
}
