import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import University from './university.model';
import User from './user.model';

@Entity({
    name: 'university_with_user'
})
class UniversityUser {
    @PrimaryColumn('uuid')
    university_id: string

    @PrimaryColumn('uuid')
    user_id: string

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

    @ManyToOne(() => University, university => university.users)
    @JoinColumn({
        name: 'university_id'
    })
    university: University

    @ManyToOne(() => User, user => user.universities)
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default UniversityUser;



