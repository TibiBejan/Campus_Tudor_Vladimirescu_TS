import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'securables'
})
class Securables {
    @PrimaryGeneratedColumn('uuid')
    securables_id!: string

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
}

export default Securables;