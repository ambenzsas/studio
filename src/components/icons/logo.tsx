import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 40"
      className={cn("h-10 w-auto", props.className)}
      {...props}
    >
      <text 
        x="0" 
        y="30" 
        fontFamily="Inter, sans-serif" 
        fontSize="24" 
        fontWeight="800"
        className="fill-current"
      >
        AM
      </text>
      <text 
        x="50" 
        y="30" 
        fontFamily="Inter, sans-serif" 
        fontSize="24" 
        fontWeight="800"
        className="fill-current"
      >
        BENZ SAS
      </text>
    </svg>
  );
}
