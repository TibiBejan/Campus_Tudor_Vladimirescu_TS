import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import RoleSecurable from "./roleSecurable.model";
import UserRole from "./userRole.model";
import UserRoleTracking from "./userRoleTracking.model";

@Entity({
    name: 'role'
})
class Role {
    @PrimaryGeneratedColumn('uuid')
    role_id!: string

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
        default: true,
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
    users: UserRole[]

    @OneToMany(() => RoleSecurable, roleSecurable => roleSecurable.role, {
        cascade: true,
    })
    securables: RoleSecurable[]

    @OneToMany(() => UserRoleTracking, userRoleTracking => userRoleTracking.role)
    rolesTracking: UserRoleTracking[]

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default Role;