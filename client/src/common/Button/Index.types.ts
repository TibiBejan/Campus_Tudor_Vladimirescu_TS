import React, { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode,
    label: string,
    disabled?: boolean,
    onClick?: () => void;
    type: "submit" | "button" | "reset",
    name: string,
    variant: "primary-light" | "primary-dark" | "underline-light" | "underline-dark",
    fontSize: "xlarge" | "large" | "medium" | "small",
    fontWeight?: "light" | "bold" | "black",
    fontColor: "light" | "dark" | "gray", 
    uppercase?: boolean,
}

export type Ref = HTMLButtonElement;

export interface StyledButtonProps {
    variant: string,
}