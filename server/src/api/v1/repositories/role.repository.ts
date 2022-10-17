import { CreateRoleDTO, PatchRoleDTO, PutRoleDTO } from '@api/v1/dto/role.dto';
import { AppError } from '@api/v1/helpers';
import { Role } from '@api/v1/models';
import { AppDataSource } from '@config/database';
import { DeleteResult, InsertResult, TypeORMError, UpdateResult } from 'typeorm';

export const addRole = async (resource: CreateRoleDTO): Promise<InsertResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .insert()
                            .into(Role)
                            .values(resource)
                            .execute()
                            .catch(err => {
                                return err;
                            });
    return queryResult;
}

export const replaceRoleById = async (roleId: string, resource: PutRoleDTO): Promise<UpdateResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .update(Role)
                            .set(resource)
                            .where("role.role_id = :role_id", { role_id: roleId })
                            .execute()
                            .catch(err => {
                                return err;
                            });
    return queryResult;
}

export const updateRoleById = async (roleId: string, resource: PatchRoleDTO): Promise<UpdateResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .update(Role)
                            .set(resource)
                            .where("role.role_id = :role_id", { role_id: roleId })
                            .execute()
                            .catch(err => {
                                return err;
                            });
    return queryResult;
}

export const deleteRoleById = async (roleId: string): Promise<DeleteResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .delete()
                        .from(Role)
                        .where("role.role_id = :role_id", { role_id: roleId })
                        .execute()
                        .catch(err => {
                            return err;
                        });
    return queryResult;
}

export const getRoleById = async (roleId: string): Promise<Role | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .select("role")
                            .from(Role, "role")
                            .where("role.role_id = :role_id", { role_id:  roleId})
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    return queryResult;
}

export const getRoleByTitleOrSlug = async(roleTitle: string, roleSlug: string): Promise<Role | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .select("role")
                            .from(Role, "role")
                            .where("role.title = :title", { title:  roleTitle})
                            .orWhere("role.slug = :slug", { slug: roleSlug })
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    return queryResult;
}

export const getRoles = async (): Promise<Role[] | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .select("role")
                        .from(Role, "role")
                        .getMany()
                        .catch(err => {
                            return err.driverError;
                        });
    return queryResult;
}

export const getRolesWithLimit = async (): Promise<void> => {

}