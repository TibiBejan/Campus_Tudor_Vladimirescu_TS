import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import Role from './role.model';
import User from './user.model';

@Entity({
    name: 'user_with_role'
})
class UserRole {
    @PrimaryColumn('uuid')
    user_id: string

    @PrimaryColumn('uuid')
    role_id: string

    @Column({
        default: true
    })
    is_active: boolean

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

    @ManyToOne(() => User, user => user.roles)
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({
        name: 'role_id'
    })
    role: Role

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default UserRole;

