import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UniversityHall from "./universityHall.model";
import UniversityJoinHoliday from "./universityJoinHoliday.model";
import UniversityOccupancy from "./universityOccupancy.model";
import UniversityUser from "./universityUser.model";

@Entity({
    name: 'university'
})
class University {
    @PrimaryGeneratedColumn('uuid')
    university_id!: string

    @Column({
        unique: true,
    })
    title!: string

    @Column({
        unique: true,
    })
    slug!: string

    @Column()
    rector !: string

    @Column()
    street_adress!: string

    @Column()
    city!: string

    @Column()
    state!: string

    @Column()
    country!: string

    @Column({
        type: 'int'
    })
    students_number: number

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
    deanship_email_adress!: string

    @Column({
        unique: true,
    })
    secretariat_email_adress!: string

    @Column({
        default: true
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

    @OneToOne(() => UniversityOccupancy, universityOccupancy => universityOccupancy.university, {
        cascade: true,
    })
    universityOccupancy: UniversityOccupancy

    @OneToMany(() => UniversityHall, uiversityHall => uiversityHall.university, {
        cascade: true,
    })
    halls: UniversityHall[]

    @OneToMany(() => UniversityUser, universityUser => universityUser.university, {
        cascade: true
    })
    users: UniversityUser[]

    @OneToMany(() => UniversityJoinHoliday, universityJoinHoliday => universityJoinHoliday.university, {
        cascade: true,
    })
    holidays: UniversityJoinHoliday[]

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default University;