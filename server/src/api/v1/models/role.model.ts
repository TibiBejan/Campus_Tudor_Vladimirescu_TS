import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import RoleSecurable from "./roleSecurable.model";
import UserRole from "./userRole.model";

@Entity({
    name: 'role'
})
class Role {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({
        unique: true,
    })
    title!: string

    @Column({
        unique: true,
    })
    slug!: string

    @Column({
        nullable: true
    })
    description!: string

    @Column({
        default: false,
    })
    is_active!: boolean

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

    @OneToMany(() => UserRole, userRole => userRole.role)
    userConnection: UserRole[]

    @OneToMany(() => RoleSecurable, roleSecurable => roleSecurable.role)
    securableConnection: RoleSecurable[]
}

export default Role;