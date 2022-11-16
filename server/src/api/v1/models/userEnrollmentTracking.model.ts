import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UserEnrollment from './userEnrollment.model';

@Entity({
    name: 'user_enrollment_tracking'
})
class UserEnrollmentTracking {
    @PrimaryGeneratedColumn('uuid')
    enrollment_tracking_id!: string

    @Column('uuid')
    enrollment_id: string

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

    @ManyToOne(() => UserEnrollment, userEnrollment => userEnrollment.enrollmentsTracking)
    @JoinColumn({
        name: 'enrollment_id'
    })
    userEnrollment: UserEnrollment
}

export default UserEnrollmentTracking;