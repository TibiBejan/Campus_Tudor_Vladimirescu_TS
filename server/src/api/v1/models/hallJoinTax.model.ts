import { BeforeRecover, BeforeSoftRemove, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import Hall from './hall.model';
import HallTax from './hallTax.model';


@Entity({
    name: 'hall_with_tax'
})
class HallJoinTax {
    @PrimaryColumn('uuid')
    hall_tax_id: string

    @PrimaryColumn('uuid')
    hall_id: string

    @Column({
        default: true
    })
    is_active: boolean

    @Column()
    hall_name: string

    @Column()
    room_type: string

    @Column()
    accommodated_students: string

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

    @ManyToOne(() => HallTax, hallTax => hallTax.halls)
    @JoinColumn({
        name: 'hall_tax_id'
    })
    hallTax: HallTax

    @ManyToOne(() => Hall, hall => hall.taxes)
    @JoinColumn({
        name: 'hall_id'
    })
    hall: Hall

    @BeforeSoftRemove()
    updateStatus() {
        this.is_active = false
    }

    @BeforeRecover()
    recoverStatus() {
        this.is_active = true
    }
}

export default HallJoinTax;

