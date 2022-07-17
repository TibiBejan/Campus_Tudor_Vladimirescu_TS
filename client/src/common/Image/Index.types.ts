import { ReactNode } from "react";

export interface DefaultProps {
    children?: ReactNode,
    fileName: string,
    alt: string,
    rest?: string[],
}