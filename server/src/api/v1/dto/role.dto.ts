export interface CreateRoleDTO {
    title: string;
    slug: string;
    description?: string;
    is_active: boolean;
}

export interface PutRoleDTO {
    title: string;
    slug: string;
    description: string;
    is_active: boolean;
}

export interface PatchRoleDTO extends Partial<PutRoleDTO> {}