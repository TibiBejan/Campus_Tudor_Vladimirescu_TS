import { CreateRoleDTO, PatchRoleDTO, PutRoleDTO } from '@api/v1/dto/role.dto';
import { AppError } from '@api/v1/helpers';
import { Role } from '@api/v1/models';
import { AppDataSource } from '@config/database';
import { InsertResult } from 'typeorm';

export const addRole = async (resource: CreateRoleDTO): Promise<InsertResult | AppError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .insert()
                            .into(Role)
                            .values(resource)
                            .execute()
                            .catch(err => {
                                return new AppError(err.message, 422 , 'DatabaseError', 'SQLInsertFailed');
                            });
    return queryResult;
}

export const putRoleById = async (): Promise<void> => {

}

export const patchRoleById = async (): Promise<void> => {

}

export const deleteRoleById = async (): Promise<void> => {

}

export const getRoleById = async (roleId: string): Promise<Role | Error> => {
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

export const getRoleByTitleOrSlug = async(roleTitle: string, roleSlug: string): Promise<Role | Error> => {
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

export const getRoles = async (): Promise<Role[] | Error> => {
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