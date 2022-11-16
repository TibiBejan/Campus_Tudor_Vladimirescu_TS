export interface ISecurableBodyWithRole {
    roleId: string,
    resource: {
        title: string,
        slug: string,
        description: string,
        is_active: boolean,
    }
}

export interface ISecurableBody {
    title: string,
    slug: string,
    description: string,
    is_active: boolean,
}

export interface ISecurableParams {
    securableId: string,
}

export interface ISecurableQuery {
    permanent: boolean
}