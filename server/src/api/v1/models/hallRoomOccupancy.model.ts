import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import HallRoom from "./hallRoom.model";

@Entity({
    name: 'hall_room_occupancy'
})
class HallRoomOccupancy {
    @PrimaryGeneratedColumn('uuid')
    hall_room_occupancy_id!: string

    @Column('uuid')
    hall_room_id: string

    @Column({
        type: 'int',
    })
    total_seats_number!: number

    @Column({
        type: 'int',
    })
    available_seats_number!: number

    @Column({
        type: 'int',
    })
    occupied_seats_number!: number

    @Column({
        type: 'float',
    })
    occupied_seats_percent!: number

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

    @OneToOne(() => HallRoom, hallRoom => hallRoom.hallRoomOccupancy)
    @JoinColumn({
        name: 'hall_room_id'
    })
    hallRoom: HallRoom
}

export default HallRoomOccupancy;