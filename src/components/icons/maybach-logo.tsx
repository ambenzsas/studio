import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function MaybachLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 240 50"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-10 w-auto text-foreground", props.className)}
            aria-label="Logo de Mercedes-Maybach"
            {...props}
        >
            <text x="0" y="40" fontFamily="'Inter', sans-serif" fontSize="40" fontWeight="800" fill="currentColor">MAYBACH</text>
        </svg>
    )
}
