import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UniversityJoinHoliday from "./universityJoinHoliday.model";

@Entity({
    name: 'university_holiday'
})
class UniversityHoliday {
    @PrimaryGeneratedColumn('uuid')
    university_holiday_id!: string
 
    @Column({
        unique: true,
    })
    holiday_name!: string

     
    @Column({
        unique: true,
    })
    start_date!: Date

     
    @Column({
        unique: true,
    })
    end_date!: Date

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

    @OneToMany(() => UniversityJoinHoliday, universityJoinHoliday => universityJoinHoliday.universityHoliday, {
        cascade: true,
    })
    universities: UniversityJoinHoliday[]

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default UniversityHoliday;