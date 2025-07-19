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
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <g transform="translate(0, 5)">
        <path 
          d="M20 0 L14 12 L0 12 L6 2 L20 0Z" 
          fill="url(#grad1)"
        />
        <path 
          d="M22 30 L34 18 L20 18 L16 28 L22 30Z" 
          fill="url(#grad1)"
          transform="rotate(10, 20, 15)"
        />
         <path 
          d="M20 0 L26 12 L40 12 L34 2 L20 0Z"
          fill="url(#grad1)"
          transform="scale(-1, 1) translate(-40, 0)"
        />
      </g>
      
      <text 
        x="50" 
        y="30" 
        fontFamily="Inter, sans-serif" 
        fontSize="24" 
        fontWeight="300"
        className="fill-muted-foreground"
      >
        distri
      </text>
      <text 
        x="105" 
        y="30" 
        fontFamily="Inter, sans-serif" 
        fontSize="24" 
        fontWeight="800"
        className="fill-foreground"
      >
        mercedes
      </text>
    </svg>
  );
}