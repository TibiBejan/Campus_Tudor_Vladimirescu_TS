export interface CreateRoleDTO {
    title: string;
    slug: string;
    description?: string;
    is_active: boolean;
}