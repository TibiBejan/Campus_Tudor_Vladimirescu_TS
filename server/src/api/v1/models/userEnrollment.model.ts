import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from './user.model';
import UserEnrollmentTracking from "./userEnrollmentTracking.model";

@Entity({
    name: 'user_enrollment'
})
class UserEnrollment {
    @PrimaryGeneratedColumn('uuid')
    user_enrollment_id!: string

    @Column('uuid')
    user_id!: string

    @Column({
        unique: true,
        nullable: true
    })
    university!: string

    @Column({
        type: 'int'
    })
    year_of_study!: number

    @Column()
    type_of_study!: string

    @Column({
        type: 'float'
    })
    grade!: number

    @Column({
        nullable: true
    })
    nationality!: string

    @Column()
    gender!: string

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

    @ManyToOne(() => User, user => user.enrollments)
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @OneToMany(() => UserEnrollmentTracking, userEnrollmentTracking => userEnrollmentTracking.userEnrollment)
    enrollmentsTracking: UserEnrollmentTracking[]
}

export default UserEnrollment;