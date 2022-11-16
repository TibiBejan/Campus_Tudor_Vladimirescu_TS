import { CreateSecurableDTO, PatchSecurableDTO, PutSecurableDTO } from '@api/v1/dto/securable.dto';
import { AppError } from '@api/v1/helpers/error.helper';
import { Securable } from '@api/v1/models';
import { addRoleSecurable } from '@api/v1/repositories/roleSecurable.repository';
import { addSecurable, deleteSecurableById, getDeletedSecurableById, getDeletedSecurables, getSecurableById, getSecurableByTitleOrSlug, getSecurables, replaceSecurableById, restoreSecurableById, softDeleteSecurableById, updateSecurableById } from '@api/v1/repositories/securable.repository';
import { readById as readRoleById } from '@api/v1/services/role.service';

/**
 * * Method used to insert a securable into the database
 * @param resource / validated securable object in accordance with the Securable Model Entity
 * @param roleId / ID of the securable role
 * @returns the created Securable ID, or throws Error in case of failure
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if current Securable already exists inside the database
 */
export const create = async (resource: CreateSecurableDTO, roleId: string): Promise<string> => {
    const existingResource = await getSecurableByTitleOrSlug(resource.title, resource.slug);
    const existingRole = await readRoleById(roleId);

    if(existingRole instanceof Error) {
        throw new AppError(existingRole.message, 500, 'DatabaseError', 'SQLSelectQueryFailed');
    }

    if(!existingRole) {
        throw new AppError('There is a problem with the resource, role does not exist!', 404, 'ResourceError', 'RoleNotFound');
    }

    // Find if resource already exists
    if(existingResource instanceof Securable) {
        throw new AppError('There is a conflict with the resource, securable already exists!', 409, 'ResourceError', 'SecurableAlreadyExists');
    }

    // Insert resource into the database Securable Entity
    const securableResponse = await addSecurable(resource);

    // If any error occurs during sql query, throw error
    if(securableResponse instanceof Error) {
        throw new AppError(securableResponse.message, 500, 'DatabaseError', 'SQLInsertQueryFailed');
    }

    // Save securable id into var
    const securableId = securableResponse.identifiers[0].securable_id;
    
    // Insert new tuple inside RoleSecurable entity
    const roleSecurableResponse = await addRoleSecurable(roleId, securableId);

    // If any error occurs during sql query, throw error
    if(roleSecurableResponse instanceof Error) {
        throw new AppError(roleSecurableResponse.message, 500, 'DatabaseError', 'SQLInsertQueryFailed');
    }
    
    return securableId;
}

/**
 * * Method used to fetch a single securable from the database based on specified ID
 * @param id of the Securable, type string
 * @returns a single Securable, if exists else throws Error
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if there is no resource with the specified ID
 */
export const readById = async (id: string, deleted: boolean = false): Promise<Securable> => {
    let response;
    
    if(deleted) {
        response = await getDeletedSecurableById(id);
    } else {
        response = await getSecurableById(id);
    }

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLSelectQueryFailed');
    }

    if(!response) {
        throw new AppError('There is a problem with the resource, securable does not exist!', 404, 'ResourceError', 'SecurableNotFound');
    }

    return response;
}

/**
 * * Method used to fetch all role securables from the database
 * @returns an array of Securables: Securables[], if exists else throws Error
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 */
export const readALl = async (deleted: boolean = false): Promise<Securable[]> => {
    let response;
    
    if(deleted) {
        response = await getDeletedSecurables();
    } else {
        response = await getSecurables();
    }

    if (response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLSelectQueryFailed');
    }

    return response;
}

/**
 * * Method used to update a role securable from the database
 * @param id, Securable Unique identifier used to query the database and find existing Securable
 * @param resource, validated securable object in accordance with the Securable Model Patch DTO
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Securable does not exist inside the database
 */
 export const patchById = async(id: string, resource: PatchSecurableDTO): Promise<void> => {
    const existingResource = await getSecurableById(id);

    if(!existingResource) {
        throw new AppError('There is a problem updating the resource, role securable does not exist!', 404, 'ResourceError', 'SecurableNotFound');
    }

    const response = await updateSecurableById(id, resource);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLUpdateQueryFailed');
    }
}

/**
 * * Method used to replace a role securable from the database
 * @param id, Securable Unique identifier used to query the database and find existing Securable
 * @param resource, validated securable object in accordance with the Securable Model Put DTO
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Role does not exist inside the database
 */
 export const putById = async(id: string, resource: PutSecurableDTO): Promise<void> => {
    const existingResource = await getSecurableById(id);

    if(!existingResource) {
        throw new AppError('There is a problem updating the resource, role securable does not exist!', 404, 'ResourceError', 'SecurableNotFound');
    }

    const response = await replaceSecurableById(id, resource);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLUpdateQueryFailed');
    }
}

/**
 * * Method used to delete a securable from the database
 * @param id, Securable Unique identifier used to query the database and find existing Securable
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Securable does not exist inside the database
 */
 export const deleteById = async(id: string, permanent: boolean = false): Promise<void> => {
    const existingResource = await getSecurableById(id, true);

    if(!existingResource) {
        throw new AppError('There is a problem deleting the resource, role securable does not exist!', 404, 'ResourceError', 'SecurableNotFound');
    }

    let response;

    if(permanent) {
        response = await deleteSecurableById(id);
    } else {
        response = await softDeleteSecurableById(id);
    }

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLDeleteQueryFailed');
    }
}

/**
 * * Method used to restore a securable from the database after a soft delete
 * @param id, Securable Unique identifier used to query the database and find existing Securable
 * @returns void
 * ! Error Types
 * DatabaseError if there is a database error while fetching the resource
 * ResourceError if desired Securable does not exist inside the database
 */
 export const restore = async(id: string): Promise<void> => {
    const existingResource = await getDeletedSecurableById(id);

    if(!existingResource) {
        throw new AppError('There is a problem updating the resource, role securable does not exist on the trashcan!', 404, 'ResourceError', 'DeletedSecurableNotFound');
    }

    const response = await restoreSecurableById(id);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLUpdateQueryFailed');
    }
}