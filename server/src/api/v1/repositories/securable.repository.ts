import { CreateSecurableDTO, PatchSecurableDTO, PutSecurableDTO } from '@api/v1/dto/securable.dto';
import { Securable } from '@api/v1/models';
import { AppDataSource } from '@config/database';
import { DeleteResult, InsertResult, TypeORMError, UpdateResult } from 'typeorm';

export const addSecurable = async(resource: CreateSecurableDTO): Promise<InsertResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                                .insert()
                                .into(Securable)
                                .values(resource)
                                .execute()
                                .catch(err => {
                                    return err;
                                });
    return queryResult;
}

export const getSecurableById = async (securableId: string, withDeleted: boolean = false): Promise<Securable | TypeORMError> => {
    let queryResult: Securable | TypeORMError;
    
    if(withDeleted) {
        queryResult = await AppDataSource.createQueryBuilder()
                            .select("securable")
                            .from(Securable, "securable")
                            .withDeleted()
                            .where("securable.securable_id = :securable_id", { securable_id:  securableId})
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    } else {
         queryResult = await AppDataSource.createQueryBuilder()
                            .select("securable")
                            .from(Securable, "securable")
                            .where("securable.securable_id = :securable_id", { securable_id:  securableId})
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    }

    return queryResult;
}

export const getDeletedSecurableById = async (securableId: string): Promise<Securable | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .select("securable")
                            .from(Securable, "securable")
                            .withDeleted()
                            .where("securable.securable_id = :securable_id", { securable_id:  securableId})
                            .andWhere("securable.deleted_at IS NOT NULL")
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    return queryResult;
}

export const getSecurableByTitleOrSlug = async(securableTitle: string, securableSlug: string): Promise<Securable | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .select("securable")
                            .from(Securable, "securable")
                            .where("securable.title = :title", { title:  securableTitle})
                            .orWhere("securable.slug = :slug", { slug: securableSlug })
                            .getOne()
                            .catch(err => {
                                return err.driverError;
                            });
    return queryResult;
}

export const getSecurables = async (): Promise<Securable[] | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .select("securable")
                        .from(Securable, "securable")
                        .getMany()
                        .catch(err => {
                            return err.driverError;
                        });
    return queryResult;
}

export const getDeletedSecurables = async (): Promise<Securable[] | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .select("securable")
                        .from(Securable, "securable")
                        .withDeleted()
                        .where("securable.deleted_at IS NOT NULL")
                        .getMany()
                        .catch(err => {
                            return err.driverError;
                        });
    return queryResult;
}

export const updateSecurableById = async(securableId: string, resource: PatchSecurableDTO): Promise<UpdateResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .update(Securable)
                            .set(resource)
                            .where("securable.securable_id = :securable_id", { securable_id: securableId })
                            .execute()
                            .catch(err => {
                                return err;
                            });
    return queryResult;
}

export const replaceSecurableById = async (securableId: string, resource: PutSecurableDTO): Promise<UpdateResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .update(Securable)
                            .set(resource)
                            .where("securable.securable_id = :securable_id", { securable_id: securableId })
                            .execute()
                            .catch(err => {
                                return err;
                            });
    return queryResult;
}

export const deleteSecurableById = async (securableId: string): Promise<DeleteResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .delete()
                        .from(Securable)
                        .where("securable.securable_id = :securable_id", { securable_id: securableId })
                        .execute()
                        .catch(err => {
                            return err;
                        });
    return queryResult;
}

export const softDeleteSecurableById = async (securableId: string): Promise<DeleteResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                        .softDelete()
                        .from(Securable)
                        .where("securable.securable_id = :securable_id", { securable_id: securableId })
                        .execute()
                        .catch(err => {
                            return err;
                        });
    return queryResult;
}

export const restoreSecurableById = async(securableId: string): Promise<UpdateResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .restore()
                            .from(Securable)
                            .where("securable.securable_id = :securable_id", { securable_id: securableId })
                            .andWhere("securable.deleted_at IS NOT NULL")
                            .execute()
                            .catch(err => {
                                return err;
                            });
    return queryResult;
}