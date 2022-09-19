import { PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, ManyToOne, JoinColumn } from "typeorm";
import Role from "./role.model";
import User from './user.model';

@Entity({
    name: 'user_role'
})
class UserRole {
    @PrimaryColumn('uuid')
    user_id: string

    @PrimaryColumn('uuid')
    role_id: string

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

    @ManyToOne(() => User, user => user.roleConnection, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @ManyToOne(() => Role, role => role.userConnection, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({
        name: 'role_id'
    })
    role: Role
}

export default UserRole;