import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Hall from "./hall.model";

@Entity({
    name: 'hall_occupancy'
})
class HallOccupancy {
    @PrimaryGeneratedColumn('uuid')
    hall_occupancy_id!: string

    @Column('uuid')
    hall_id: string

    @Column({
        type: 'int',
    })
    total_places_number!: number

    @Column({
        type: 'int',
    })
    available_places_number!: number

    @Column({
        type: 'int',
    })
    occupied_places_number!: number

    @Column({
        type: 'float',
    })
    occupied_places_percent!: number

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

    @OneToOne(() => Hall, hall => hall.hallOccupancy)
    @JoinColumn({
        name: 'hall_id'
    })
    hall: Hall
}

export default HallOccupancy;