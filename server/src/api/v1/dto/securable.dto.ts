export interface CreateSecurableDTO {
    title: string;
    slug: string;
    description?: string;
    is_active: boolean;
}

export interface PutSecurableDTO {
    title: string;
    slug: string;
    description: string;
    is_active: boolean;
}

export interface PatchSecurableDTO extends Partial<PutSecurableDTO> {}