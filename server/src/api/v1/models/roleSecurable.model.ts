import { PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, ManyToOne, JoinColumn } from "typeorm";
import Role from './role.model';
import Securable from './securable.model';

@Entity({
    name: 'role_securables'
})
class RoleSecurables {
    @PrimaryColumn('uuid')
    role_id: string

    @PrimaryColumn('uuid')
    securable_id: string

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt!: Date

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt!: Date

    @DeleteDateColumn({
        name: 'deleted_at'
    })
    deletedAt?: Date

    @ManyToOne(() => Role, role => role.securableConnection, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({
        name: 'role_id'
    })
    role: Role

    @ManyToOne(() => Securable, securable => securable.roleConnection, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({
        name: 'securable_id'
    })
    securable: Securable
}

export default RoleSecurables;

