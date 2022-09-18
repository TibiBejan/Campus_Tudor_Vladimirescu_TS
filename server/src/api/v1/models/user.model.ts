import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'user'
})
class User {
    @PrimaryGeneratedColumn('uuid')
    user_id!: string

    @Column()
    first_name!: string

    @Column()
    last_name!: string

    @Column({
        unique: true,
    })
    email_adress!: string

    @Column({
        unique: true,
    })
    phone_number!: string

    @Column()
    password!: string

    @Column({
        nullable: true,
    })
    password_changed_at?: Date

    @Column()
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

export default User;