import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from './user.model';

@Entity({
    name: 'user_profile'
})
class UserProfile {
    @PrimaryGeneratedColumn('uuid')
    user_profile_id!: string

    @Column('uuid')
    user_id!: string

    @Column({
        unique: true,
        nullable: true
    })
    username!: string

    @Column({
        nullable: true
    })
    birth_date!: Date

    @Column({
        nullable: true
    })
    gender!: string

    @Column({
        nullable: true
    })
    nationality!: string

    @Column({
        nullable: true
    })
    street_adress!: string

    @Column({
        nullable: true
    })
    city!: string

    @Column({
        nullable: true
    })
    state!: string

    @Column({
        nullable: true
    })
    country!: string

    @Column({
        nullable: true,
        type: 'bigint'
    })
    zip_code!: string

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

    @OneToOne(() => User, user => user.profile)
    @JoinColumn({
        name: 'user_id'
    })
    user: User
}

export default UserProfile;