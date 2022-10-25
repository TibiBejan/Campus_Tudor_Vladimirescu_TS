export interface ISecurableBody {
    roleId: string,
    resource: {
        title: string,
        slug: string,
        description: string,
        is_active: boolean,
    }
}

export interface ISecurableParams {
    securableId: string,
}