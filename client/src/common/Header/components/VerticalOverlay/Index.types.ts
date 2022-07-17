import { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode;
    toggled: boolean
}

export interface StyledFadeInProps {
    fadein: boolean;
}

export interface StyledFadeOutProps {
    fadeout: boolean;
}

export interface StyledVerticalTextProps {
    $verticaltext: boolean;
}