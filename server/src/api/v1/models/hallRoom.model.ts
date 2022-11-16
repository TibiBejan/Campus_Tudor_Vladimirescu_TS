import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Hall from "./hall.model";
import HallRoomOccupancy from "./hallRoomOccupancy.model";
import HallRoomType from "./hallRoomType.model";

@Entity({
    name: 'hall_room'
})
class HallRoom {
    @PrimaryGeneratedColumn('uuid')
    hall_room_id!: string

    @Column('uuid')
    hall_id: string

    @Column()
    room_type: string

    @Column({
        type: 'int'
    })
    room_number: number

    @Column({
        type: 'int'
    })
    floor: number

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

    @OneToOne(() => HallRoomOccupancy, hallRoomOccupancy => hallRoomOccupancy.hallRoom)
    hallRoomOccupancy: HallRoomOccupancy

    @OneToOne(() => HallRoomType, hallRoomType => hallRoomType.hallRoom)
    @JoinColumn({
        name: 'room_type'
    })
    hallRoomType: HallRoomType

    @ManyToOne(() => Hall, hall => hall.hallRooms)
    @JoinColumn({
        name: 'hall_id'
    })
    hall: Hall
}

export default HallRoom;