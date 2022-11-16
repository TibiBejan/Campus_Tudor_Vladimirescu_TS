import { CreateRoleDTO, PatchRoleDTO, PutRoleDTO } from '@api/v1/dto/role.dto';
import { Role, RoleSecurable } from '@api/v1/models';
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

export const restoreRoleById = async(roleId: string): Promise<UpdateResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .restore()
                            .from(Role)
                            .where("role.role_id = :role_id", { role_id: roleId })
                            .andWhere("role.deleted_at IS NOT NULL")
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

export const softDeleteRoleById = async (roleId: string): Promise<DeleteResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .select("role")
                        .from(Role, "role")
                        .leftJoinAndSelect("role.securables", "role_with_securable")
                        .leftJoinAndSelect("role_with_securable.securable", "securable")
                        .softDelete()
                        .from("role")

                        .softDelete()
                        .from("role_with_securable")

                        .softDelete()
                        .from("securable")
                        
                        .execute()
                        .catch(err => {
                            return err;
                        });
    return queryResult;
}

export const getRoleById = async (roleId: string, withDeleted: boolean = false): Promise<Role | TypeORMError> => {
    let queryResult: Role | TypeORMError;

    if(withDeleted) {
        queryResult = await AppDataSource.createQueryBuilder()
                            .select("role")
                            .from(Role, "role")
                            // .leftJoinAndSelect("role.securables", "role_with_securable")
                            // .leftJoinAndSelect("role_with_securable.securable", "securable")
                            .where("role.role_id = :role_id", { role_id:  roleId})
                            .withDeleted()
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    } else {
        queryResult = await AppDataSource.createQueryBuilder()
                            .select("role")
                            .from(Role, "role")
                            // .leftJoinAndSelect("role.securables", "role_with_securable")
                            // .leftJoinAndSelect("role_with_securable.securable", "securable")
                            .where("role.role_id = :role_id", { role_id: roleId })
                            // .select([
                            //     "role.role_id",
                            //     "role.title",
                            //     "role.slug",
                            //     "role.description",
                            //     "role.is_active",
                            //     "role_with_securable",
                            //     "securable.securable_id",
                            //     "securable.title",
                            //     "securable.slug",
                            //     "securable.description",
                            //     "securable.is_active",
                            // ])
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    }           
    return queryResult;
}

export const getDeletedRoleById = async (roleId: string): Promise<Role | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .select("role")
                            .from(Role, "role")
                            .withDeleted()
                            .where("role.role_id = :role_id", { role_id:  roleId})
                            .andWhere("role.deleted_at IS NOT NULL")
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

export const getDeletedRoles = async (): Promise<Role[] | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .select("role")
                        .from(Role, "role")
                        .withDeleted()
                        .where("role.deleted_at IS NOT NULL")
                        .getMany()
                        .catch(err => {
                            return err.driverError;
                        });
    return queryResult;
}

export const getRolesWithLimit = async (): Promise<void> => {

}