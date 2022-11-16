import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./user.model";


@Entity({
    name: 'session'
})
class Session {
    @PrimaryGeneratedColumn('uuid')
    session_id!: string

    @Column('uuid')
    user_id: string

    @Column({
        unique: true,
        nullable: false,
    })
    token!: string

    @Column()
    expiration_date!: Date

    @Column({
        default: false,
    })
    expired!: boolean

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

    @ManyToOne(() => User, user => user.sessions)
    @JoinColumn({
        name: 'user_id'
    })
    user: User
}

export default Session;