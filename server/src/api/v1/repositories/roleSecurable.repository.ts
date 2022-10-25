import { RoleSecurable } from '@api/v1/models';
import { AppDataSource } from '@config/database';
import { InsertResult, TypeORMError } from 'typeorm';

export const addRoleSecurable = async(roleId: string, securableId: string): Promise<InsertResult | TypeORMError> => {
    const queryResult = await AppDataSource.createQueryBuilder()
                                .insert()
                                .into(RoleSecurable)
                                .values({
                                    role_id: roleId,
                                    securable_id: securableId,
                                })
                                .execute()
                                .catch(err => {
                                    return err;
                                });
    return queryResult;
}