import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import HallRoom from "./hallRoom.model";

@Entity({
    name: 'hall_room_type'
})
class HallRoomType {
    @PrimaryGeneratedColumn('uuid')
    hall_room_type_id!: string

    @Column()
    room_type: string

    @Column({
        type: 'float'
    })
    room_grade_constraint: number

    @Column()
    description: string

    @Column()
    facilities: string

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

    @OneToOne(() => HallRoom, hallRoom => hallRoom.hallRoomType)
    hallRoom: HallRoom
}

export default HallRoomType;