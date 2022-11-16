import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import HallJoinTax from "./hallJoinTax.model";
// import Hall from "./hall.model";

@Entity({
    name: 'hall_tax'
})
class HallTax {
    @PrimaryGeneratedColumn('uuid')
    hall_tax_id!: string

    @Column({
        type: 'float',
    })
    rent_per_month!: number

    @Column({
        type: 'float',
    })
    rent_per_semester!: number
    
    @Column({
        type: 'float',
    })
    rent_per_year!: number

    @Column({
        default: true
    })
    is_active: boolean

    @Column()
    accountant_name: string

    @Column()
    accountant_phone_number: string

    @Column()
    accountant_email: string

    @Column()
    payment_account: string

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

    @OneToMany(() => HallJoinTax, hallJoinTax => hallJoinTax.hallTax)
    halls: HallJoinTax[]

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default HallTax;