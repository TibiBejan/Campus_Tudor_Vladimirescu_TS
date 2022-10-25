import { CreateSecurableDTO, PatchSecurableDTO, PutSecurableDTO } from '@api/v1/dto/securable.dto';
import { AppError } from '@api/v1/helpers/error.helper';
import { RoleSecurable, Securable } from '@api/v1/models';
import { addRoleSecurable } from '@api/v1/repositories/roleSecurable.repository';
import { addSecurable, getSecurableById, getSecurableByTitleOrSlug } from '@api/v1/repositories/securable.repository';

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

    // Save securable id
    const securableId = securableResponse.identifiers[0].securable_id;

    console.log(roleId, securableId);
    
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
export const readById = async (id: string): Promise<Securable> => {
    const response = await getSecurableById(id);

    if(response instanceof Error) {
        throw new AppError(response.message, 500, 'DatabaseError', 'SQLSelectQueryFailed');
    }

    if(!response) {
        throw new AppError('There is a problem with the resource, securable does not exist!', 404, 'ResourceError', 'SecurableNotFound');
    }

    return response;
}