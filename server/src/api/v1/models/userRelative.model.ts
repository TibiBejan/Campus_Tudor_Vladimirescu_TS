import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from './user.model';

@Entity({
    name: 'user_relative'
})
class UserRelative {
    @PrimaryGeneratedColumn('uuid')
    user_relative_id!: string

    @Column('uuid')
    user_id!: string

    @Column()
    first_name!: string

    @Column()
    last_name!: string

    @Column()
    gender: string

    @Column()
    email!: string

    @Column()
    phone_number!: string

    @Column()
    relation!: string

    @Column()
    adress!: string

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

    @ManyToOne(() => User, user => user.relatives)
    @JoinColumn({
        name: 'user_id'
    })
    user: User
}

export default UserRelative;