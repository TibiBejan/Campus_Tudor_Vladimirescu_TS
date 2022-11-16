import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import University from "./university.model";

@Entity({
    name: 'university_occupancy'
})
class UniversityOccupancy {
    @PrimaryGeneratedColumn('uuid')
    university_occupancy_id!: string

    @Column('uuid')
    university_id: string

    @Column({
        type: 'int',
    })
    total_students_number!: number

    @Column({
        type: 'int',
    })
    available_students_number!: number

    @Column({
        type: 'int',
    })
    accommodated_students_number!: number

    @Column({
        type: 'float',
    })
    accommodated_students_percent!: number

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

    @OneToOne(() => University, university => university.universityOccupancy)
    @JoinColumn({
        name: 'university_id'
    })
    university: University
}

export default UniversityOccupancy;