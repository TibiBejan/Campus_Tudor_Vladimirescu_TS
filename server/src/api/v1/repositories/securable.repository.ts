import { CreateSecurableDTO } from '@api/v1/dto/securable.dto';
import { Securable } from '@api/v1/models';
import { AppDataSource } from '@config/database';
import { InsertResult, TypeORMError } from 'typeorm';

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

export const getSecurableById = async (securableId: string): Promise<Securable | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                            .select("securable")
                            .from(Securable, "securable")
                            .where("securable.securable_id = :securable_id", { securable_id:  securableId})
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