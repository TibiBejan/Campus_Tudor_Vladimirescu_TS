import { CreateRoleDTO, PatchRoleDTO, PutRoleDTO } from '@api/v1/dto/role.dto';
import { AppError } from '@api/v1/helpers';
import { Role } from '@api/v1/models';
import { addRole, deleteRoleById, getDeletedRoleById, getDeletedRoles, getRoleById, getRoleByTitleOrSlug, getRoles, getRolesWithLimit, replaceRoleById, restoreRoleById, softDeleteRoleById, updateRoleById } from '@api/v1/repositories/role.repository';

/**
 * * Method used to insert a role into the database
 * @param resource / validated role object in accordance with the Role Model 
 * @returns the created Role ID, or throws Error in case of failure
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if current Role already exists inside the database
 */
export const create = async(resource: CreateRoleDTO): Promise<string> => {
    const existingResource = await getRoleByTitleOrSlug(resource.title, resource.slug);

    if(existingResource instanceof Role) {
        throw new AppError('There is a conflict with the resource, role already exists!', 409, 'ResourceError', 'RoleAlreadyExists');
    }

    const response = await addRole(resource);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLInsertQueryFailed');
    }
    
    return response.identifiers[0].role_id;
}

/**
 * * Method used to restore a role from the database after a soft delete
 * @param id, Role Unique identifier used to query the database and find existing Role
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Role does not exist inside the database
 */
export const restore = async(id: string): Promise<void> => {
    const existingResource = await getDeletedRoleById(id);

    if(!existingResource) {
        throw new AppError('There is a problem updating the resource, role does not exist on the trashcan!', 404, 'ResourceError', 'DeletedRoleNotFound');
    }

    const response = await restoreRoleById(id);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLUpdateQueryFailed');
    }
}

/**
 * * Method used to replace  a role from the database
 * @param id, Role Unique identifier used to query the database and find existing Role
 * @param resource, validated role object in accordance with the Role Model Put DTO
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Role does not exist inside the database
 */
export const putById = async(id: string, resource: PutRoleDTO): Promise<void> => {
    const existingResource = await getRoleById(id);

    if(!existingResource) {
        throw new AppError('There is a problem updating the resource, role does not exist!', 404, 'ResourceError', 'RoleNotFound');
    }

    const response = await replaceRoleById(id, resource);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLUpdateQueryFailed');
    }
}

/**
 * * Method used to update a role from the database
 * @param id, Role Unique identifier used to query the database and find existing Role
 * @param resource, validated role object in accordance with the Role Model Patch DTO
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Role does not exist inside the database
 */
export const patchById = async(id: string, resource: PatchRoleDTO): Promise<void> => {
    const existingResource = await getRoleById(id);

    if(!existingResource) {
        throw new AppError('There is a problem updating the resource, role does not exist!', 404, 'ResourceError', 'RoleNotFound');
    }

    const response = await updateRoleById(id, resource);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLUpdateQueryFailed');
    }
}

/**
 * * Method used to delete a role from the database
 * @param id, Role Unique identifier used to query the database and find existing Role
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Role does not exist inside the database
 */
export const deleteById = async(id: string, permanent: boolean = false): Promise<void> => {
    const existingResource = await getRoleById(id, true);

    if(!existingResource) {
        throw new AppError('There is a problem deleting the resource, role does not exist!', 404, 'ResourceError', 'RoleNotFound');
    }

    let response;

    if(permanent) {
        response = await deleteRoleById(id);
    } else {
        response = await softDeleteRoleById(id);
    }

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLDeleteQueryFailed');
    }
}

/**
 * * Method used to fetch a single role from the database based on specified ID
 * @param id of the Role, type string
 * @returns a single Role, if exists else throws Error
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if there is no resource with the specified ID
 */
export const readById = async(id: string, deleted: boolean = false): Promise<Role> => {
    let response;
    
    if(deleted) {
        response = await getDeletedRoleById(id);
    } else {
        response = await getRoleById(id);
    }

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLSelectQueryFailed');
    }

    if(!response) {
        throw new AppError('There is a problem with the resource, role does not exist!', 404, 'ResourceError', deleted ? 'DeletedRoleNotFound' : 'RoleNotFound');
    }

    return response;
}

/**
 * * Method used to fetch all roles from the database
 * @returns an array of Roles: Role[], if exists else throws Error
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 */
export const readAll = async(deleted: boolean = false): Promise<Role[]> => {
    let response;
    
    if(deleted) {
        response = await getDeletedRoles();
    } else {
        response = await getRoles();
    }

    if (response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLSelectQueryFailed');
    }

    return response;
}

export const list = async(limit: number): Promise<void> => {

}