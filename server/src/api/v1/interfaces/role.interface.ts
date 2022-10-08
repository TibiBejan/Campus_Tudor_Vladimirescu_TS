export interface IRoleBodyWrite {
    title: string;
    slug: string;
    description: string;
    is_active: boolean;
}

export interface IRoleBodyDelete {
    id: string;
}