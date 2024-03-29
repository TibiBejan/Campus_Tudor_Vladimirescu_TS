import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import RoleSecurable from "./roleSecurable.model";

@Entity({
    name: 'securable'
})
class Securable {
    @PrimaryGeneratedColumn('uuid')
    securable_id!: string

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

    @OneToMany(() => RoleSecurable, roleSecurable => roleSecurable.securable, {
        cascade: true,
    })
    roles: RoleSecurable[]

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default Securable;