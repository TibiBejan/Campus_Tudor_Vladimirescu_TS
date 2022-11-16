import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Session from './session.model';
import StudentAllocation from "./studentAllocation.model";
import UniversityUser from "./universityUser.model";
import UserEnrollment from "./userEnrollment.model";
import UserProfile from "./userProfile.model";
import UserRelative from "./userRelative.model";
import UserRole from './userRole.model';

@Entity({
    name: 'user'
})
class User {
    @PrimaryGeneratedColumn('uuid')
    user_id!: string

    @Column()
    first_name!: string

    @Column()
    last_name!: string

    @Column({
        unique: true,
    })
    email_adress!: string

    @Column({
        unique: true,
    })
    phone_number!: string

    @Column()
    password!: string

    @Column({
        nullable: true,
    })
    password_changed_at?: Date

    @Column()
    is_active!: boolean

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

    @OneToOne(() => UserProfile, userProfile => userProfile.user)
    profile: UserProfile

    @OneToMany(() => UserRole, userRole => userRole.user, {
        cascade: true
    })
    roles: UserRole[]

    @OneToMany(() => Session, session => session.user, {
        cascade: true
    })
    sessions: Session[]

    @OneToMany(() => StudentAllocation, studentAllocation => studentAllocation.user, {
        cascade: true,
    })
    allocations: StudentAllocation[]

    @OneToMany(() => UniversityUser, universityUser => universityUser.user, {
        cascade: true
    })
    universities: UniversityUser[]

    @OneToMany(() => UserEnrollment, userEnrollment => userEnrollment.user, {
        cascade: true
    })
    enrollments: UserEnrollment[]

    @OneToMany(() => UserRelative, userRelative => userRelative.user, {
        cascade: true
    })
    relatives: UserRelative[]

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default User;