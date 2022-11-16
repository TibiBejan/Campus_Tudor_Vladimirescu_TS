import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Role from "./role.model";

@Entity({
    name: 'user_role_tracking'
})
class UserRoleTracking {
    @PrimaryGeneratedColumn('uuid')
    role_tracking_id!: string

    @Column('uuid')
    role_id: string

    @Column('uuid')
    user_id: string

    @Column()
    user_name: string

    @Column()
    updated_field!: string

    @Column()
    updated_field_value!: string

    @Column()
    updated_field_previous_value!: string

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

    @ManyToOne(() => Role, role => role.rolesTracking)
    @JoinColumn({
        name: 'role_id'
    })
    role: Role
}

export default UserRoleTracking;