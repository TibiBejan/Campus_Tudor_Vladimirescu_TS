import { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode,
    linkPath: string,
    linkLabel?: string,
    variant?: "dark" | "light" | "gray",
    fontSize?: "xlarge" | "large" | "medium" | "small",
    fontWeight?: string,
    uppercase?: boolean,
    verticalText?: boolean,
}

export interface StyledLinkProps {
    variant: string | undefined,
    $verticaltext: boolean | undefined,
}