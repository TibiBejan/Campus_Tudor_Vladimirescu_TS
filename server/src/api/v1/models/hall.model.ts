import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import HallJoinTax from "./hallJoinTax.model";
import HallOccupancy from "./hallOccupancy.model";
import HallRoom from "./hallRoom.model";
import HallStaff from "./hallStaff.model";
import StudentAllocation from "./studentAllocation.model";
import UniversityHall from "./universityHall.model";

@Entity({
    name: 'hall'
})
class Hall {
    @PrimaryGeneratedColumn('uuid')
    hall_id!: string

    @Column({
        unique: true,
    })
    name!: string

    @Column({
        unique: true,
    })
    slug!: string

    @Column()
    description!: string

    @Column()
    rooms_number!: number

    @Column()
    students_number!: number

    @Column()
    students_per_room!: number

    @Column()
    min_grade!: number

    @Column({
        nullable: true
    })
    max_grade!: number

    @Column()
    facilities !: string

    @Column({
        default: true
    })
    private_bathroom !: boolean

    @Column()
    street_adress!: string

    @Column({
        type: 'double precision'
    })
    adress_longitude!: string

    @Column({
        type: 'double precision'
    })
    adress_latitude!: string

    @Column()
    city!: string

    @Column()
    state!: string

    @Column()
    country!: string

    @Column({
        nullable: true,
        type: 'bigint'
    })
    zip_code!: string

    @Column({
        unique: true,
    })
    phone_number!: string

    @Column({
        unique: true,
        nullable: true,
    })
    fax_number!: string

    @Column({
        unique: true,
    })
    email_adress!: string

    @Column({
        default: true,
    })
    is_active: boolean

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

    @OneToOne(() => HallOccupancy, hallOccupancy => hallOccupancy.hall)
    hallOccupancy: HallOccupancy

    @OneToMany(() => UniversityHall, universityHall => universityHall.hall, {
        cascade: true,
    })
    universities: UniversityHall[]

    @OneToMany(() => HallStaff, hallStaff => hallStaff.hall)
    hallStaffs: HallStaff[]

    @OneToMany(() => HallJoinTax, hallJoinTax => hallJoinTax.hall)
    taxes: HallJoinTax[]

    @OneToMany(() => HallRoom, hallRoom => hallRoom.hall)
    hallRooms: HallRoom[]

    
    @OneToMany(() => StudentAllocation, studentAllocation => studentAllocation.hall)
    studentAllocations: StudentAllocation[]

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default Hall;