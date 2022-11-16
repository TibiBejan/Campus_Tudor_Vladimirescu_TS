export interface IRoleBody {
    title: string,
    slug: string,
    description: string,
    is_active: boolean,
}

export interface IRoleParams {
    roleId: string,
}

export interface IRoleQuery {
    permanent: boolean,
}