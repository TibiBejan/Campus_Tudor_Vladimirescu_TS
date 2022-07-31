import { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode,
    type: "showcase" | "secondary"; 
    imagePath: string; 
    imageAlt: string;
    title: string; 
    linkLabel?: string; 
    linkPath?: string;
}

export interface StyledHeroProps {
    type: string;
}