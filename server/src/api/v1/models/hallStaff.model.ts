import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Hall from "./hall.model";

@Entity({
    name: 'hall_staff'
})
class HallStaff {
    @PrimaryGeneratedColumn('uuid')
    hall_staff_id!: string

    @Column('uuid')
    hall_id: string

    @Column()
    staff_name: string

    @Column()
    staff_job_position: string

    @Column()
    staff_email: string

    @Column()
    staff_phone_number: string

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

    @ManyToOne(() => Hall, hall => hall.hallStaffs)
    @JoinColumn({
        name: 'hall_id'
    })
    hall: Hall
}

export default HallStaff;