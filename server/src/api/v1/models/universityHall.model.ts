import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import Hall from './hall.model';
import University from './university.model';

@Entity({
    name: 'university_with_hall'
})
class UniversityHall {
    @PrimaryColumn('uuid')
    university_id: string

    @PrimaryColumn('uuid')
    hall_id: string

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

    @ManyToOne(() => Hall, hall => hall.universities, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({
        name: 'hall_id'
    })
    hall: Hall

    @ManyToOne(() => University, university => university.halls, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({
        name: 'university_id'
    })
    university: University

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default UniversityHall;

