import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import University from './university.model';
import UniversityHoliday from './universityHoliday.model';

@Entity({
    name: 'university_with_holiday'
})
class UniversityWithHoliday {
    @PrimaryColumn('uuid')
    university_id: string

    @PrimaryColumn('uuid')
    university_holiday_id: string

    @Column({
        default: true
    })
    accommodate_students: boolean

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

    @ManyToOne(() => University, university => university.holidays)
    @JoinColumn({
        name: 'university_id'
    })
    university: University

    @ManyToOne(() => UniversityHoliday, universityHoliday => universityHoliday.universities)
    @JoinColumn({
        name: 'university_holiday_id'
    })
    universityHoliday: UniversityHoliday

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default UniversityWithHoliday;

