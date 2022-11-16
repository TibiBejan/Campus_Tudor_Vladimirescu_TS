import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Hall from "./hall.model";
import User from "./user.model";

@Entity({
    name: 'student_allocation'
})
class StudentAllocation {
    @PrimaryGeneratedColumn('uuid')
    student_allocation_id!: string

    @Column('uuid')
    user_id: string

    @Column('uuid')
    hall_id: string

    @Column()
    hall_name: string

    @Column()
    room_number: string

    @Column()
    room_type: string

    @Column()
    room_rent: string
    
    @Column({
        default: 'pending'
    })
    status: string

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

    @ManyToOne(() => Hall, hall => hall.studentAllocations)
    @JoinColumn({
        name: 'hall_id'
    })
    hall: Hall

    @ManyToOne(() => User, user => user.allocations)
    @JoinColumn({
        name: 'user_id'
    })
    user: User
}

export default StudentAllocation;